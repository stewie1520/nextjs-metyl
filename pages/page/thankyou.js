import React from 'react';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ThankYouContent from '../../components/partials/page/ThankYou';
import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';

const BlankPage = () => {
    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <ThankYouContent />
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default BlankPage;
