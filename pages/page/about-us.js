import React from 'react';

import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import BreadCrumb from '../../components/elements/BreadCrumb';
import OurTeam from '../../components/partials/page/about-us/OurTeam';
import AboutAwards from '../../components/partials/page/about-us/AboutAwards';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Giới thiệu Metyl',
        },
    ];
    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <img src="/static/img/bg/about-us.jpg" alt="" />
                <BreadCrumb breacrumb={breadCrumb} />
                <OurTeam />
                <AboutAwards />
            </div>
            <FooterFullwidth />
        </div>
    );
};
export default AboutUsPage;
