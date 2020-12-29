import React from 'react';
import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ShoppingCart from '../../components/partials/account/ShoppingCart';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ShoppingCartPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Giỏ hàng',
        },
    ];
    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <ShoppingCart />
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default ShoppingCartPage;
