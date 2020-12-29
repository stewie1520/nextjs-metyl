import React from 'react';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BlankContent from '../../components/partials/page/Blank';
import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';

const BlankPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Trang trống',
        },
    ];

    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <BlankContent />
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default BlankPage;
