import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';

import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import {
    getRelatedProducts,
    getProductsById,
} from '../../store/product/action';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import _isEqual from 'lodash/isEqual';

class ProductDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ctx.store.dispatch(getProductsById(ctx.query.pid));
        return {
            query: ctx.query,
            singleProduct: ctx.store.getState().product.singleProduct,
        };
    }

    componentDidMount() {
        const { pid } = this.props.query;
        if (isNaN(pid)) {
            Router.push('/page/page-404');
        }

        this.props.dispatch(
            getRelatedProducts(this.props.singleProduct.categories[0].id)
        );
    }

    render() {
        const { singleProduct, relatedProducts } = this.props;
        // if(singleProduct === null) return
        const breadCrumb = [
            {
                text: 'Trang chủ',
                url: '/',
            },
            {
                text: singleProduct.title,
            },
        ];

        return (
            <div className="site-content">
                <HeaderTechnology />
                <HeaderMobileProduct />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">
                                <ProductDetailFullwidth
                                    product={singleProduct}
                                />
                            </div>
                            <div className="ps-page__right">
                                <ProductWidgets products={relatedProducts} />
                            </div>
                        </div>
                    </div>
                </div>
                <FooterFullwidth />
            </div>
        );
    }
}

export default connect((state) => state.product)(ProductDefaultPage);
