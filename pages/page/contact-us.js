import React from 'react';

import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ContactInfo from '../../components/partials/page/ContactInfo';
import ContactForm from '../../components/partials/page/ContactForm';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ContactMap from '../../components/partials/page/ContactMap';

const ContactUsPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Liên hệ với chúng tôi',
        },
    ];

    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single" id="contact-us">
                <BreadCrumb breacrumb={breadCrumb} />
                <ContactMap />
                <ContactInfo />
                <ContactForm />
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default ContactUsPage;
