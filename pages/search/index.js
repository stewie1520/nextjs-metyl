import React from 'react';

import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import BreadCrumb from '../../components/elements/BreadCrumb';
import SearchResult from '../../components/partials/shop/SearchResult';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const SearchResultsPage = () => {
    const breadCrumb = [
        {
            text: 'Trang chủ',
            url: '/',
        },
        {
            text: 'Kết quả tìm kiếm',
        },
    ];

    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} />
            <div className="ps-page--shop" id="shop-sidebar">
                <div className="container">
                    <SearchResult />
                </div>
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default SearchResultsPage;
