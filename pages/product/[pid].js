import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';

import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import CustomerBought from '../../components/partials/product/CustomerBought';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getProductsById } from '../../store/product/action';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';

class ProductDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        ctx.store.dispatch(getProductsById(ctx.query.pid));
        return { query: ctx.query };
    }

    componentDidMount() {
        const { pid } = this.props.query;
        if (isNaN(pid)) {
            Router.push('/page/page-404');
        }
    }

    render() {
        const { singleProduct } = this.props;
        // if(singleProduct === null) return
        const breadCrumb = [
            {
                text: 'Home',
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
                                <ProductWidgets />
                            </div>
                        </div>
                        <CustomerBought layout="fullwidth" />
                    </div>
                </div>
                <FooterFullwidth />
            </div>
        );
    }
}

export default connect((state) => state.product)(ProductDefaultPage);
