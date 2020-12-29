import React from 'react';
import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import BreadCrumb from '../../components/elements/BreadCrumb';
import FaqsContent from '../../components/partials/page/FaqsContent';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const FaqsPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Câu hỏi thường gặp',
        },
    ];

    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <FaqsContent />
                </div>
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default FaqsPage;
