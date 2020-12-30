import React from 'react';
import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Checkout from '../../components/partials/account/Checkout';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import axios from 'axios';

const OrderTrackingPage = ({ provinces }) => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Giỏ hàng',
            url: '/account/shopping-cart',
        },
        {
            text: 'Xác nhận',
        },
    ];
    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout provinces={provinces} />
            </div>
            <FooterFullwidth />
        </div>
    );
};

OrderTrackingPage.getInitialProps = async (context) => {
    try {
        const { data: provinces } = await axios.get(
            `${process.env.apiLocationEndpoint}/provinces?size=100`
        );

        return {
            provinces,
        };
    } catch {
        return {
            provinces: [],
        };
    }
};

export default OrderTrackingPage;
