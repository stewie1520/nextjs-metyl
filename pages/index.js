import React from 'react';
import { connect } from 'react-redux';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import LayoutShop from '../components/partials/shop/LayoutShop';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import ShopBanner from '../components/partials/shop/ShopBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HeaderTechnology from '../components/shared/headers/HeaderTechnology';
import { getProducts, getProductsByCategory } from '../store/product/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        if (Object.entries(ctx.query).length > 0) {
            if (ctx.query.category) {
                await ctx.store.dispatch(
                    getProductsByCategory(ctx.query.category)
                );
            } else if (ctx.query.page) {
                await ctx.store.dispatch(
                    getProducts({ currentPage: ctx.query.page, limit: 10 })
                );
            } else {
                await ctx.store.dispatch(
                    getProducts(ctx.store.getState().product.pagination)
                );
            }
        } else {
            await ctx.store.dispatch(
                getProducts(ctx.store.getState().product.pagination)
            );
        }
        return {
            query: ctx.query,
            allProducts: ctx.store.getState().product.allProducts,
        };
    }

    render() {
        const { allProducts, pagination, query } = this.props;
        return (
            <div className="site-content">
                <HeaderTechnology />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <div className="ps-container">
                        <ShopBanner />
                        <SiteFeatures />
                        <LayoutShop
                            products={allProducts}
                            pagination={pagination}
                            query={query}
                        />
                    </div>
                </div>
                <FooterFullwidth />
            </div>
        );
    }
}

export default connect((state) => state.product)(ShopDefaultPage);
