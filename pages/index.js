import React from 'react';
import { connect } from 'react-redux';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import LayoutShop from '../components/partials/shop/LayoutShop';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import ShopBanner from '../components/partials/shop/ShopBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HeaderTechnology from '../components/shared/headers/HeaderTechnology';
import {
    getProducts,
    getProductsByCategory,
    getProductsRecommend,
    getProductsBestSale,
} from '../store/product/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        const tasks = [
            ctx.store.dispatch(getProductsBestSale()),
            ctx.store.dispatch(getProductsRecommend()),
        ];
        if (Object.entries(ctx.query).length > 0) {
            if (ctx.query.category) {
                tasks.push(
                    ctx.store.dispatch(
                        getProductsByCategory(ctx.query.category)
                    )
                );
            } else if (ctx.query.page) {
                tasks.push(
                    ctx.store.dispatch(
                        getProducts({ currentPage: ctx.query.page, limit: 10 })
                    )
                );
            } else {
                tasks.push(
                    ctx.store.dispatch(
                        getProducts(ctx.store.getState().product.pagination)
                    )
                );
            }
        } else {
            tasks.push(
                ctx.store.dispatch(
                    getProducts(ctx.store.getState().product.pagination)
                )
            );
        }

        await Promise.all(tasks);

        return {
            query: ctx.query,
            allProducts: ctx.store.getState().product.allProducts,
            bestSaleProducts: ctx.store.getState().product.bestSaleProducts,
            recommendProducts: ctx.store.getState().product.recommendProducts,
        };
    }

    render() {
        const {
            allProducts,
            pagination,
            query,
            bestSaleProducts,
            recommendProducts,
        } = this.props;
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
                            recommendProducts={recommendProducts}
                            bestSaleProducts={bestSaleProducts}
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
