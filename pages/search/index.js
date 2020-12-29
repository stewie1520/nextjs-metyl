import React from 'react';

import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import BreadCrumb from '../../components/elements/BreadCrumb';
import SearchResult from '../../components/partials/shop/SearchResult';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import _isEmpty from 'lodash/isEmpty';
import { getProductsByKeyword } from '../../store/product/action';

const SearchResultsPage = ({ products, pagination }) => {
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
                    <SearchResult products={products} pagination={pagination} />
                </div>
            </div>
            <FooterFullwidth />
        </div>
    );
};

SearchResultsPage.getInitialProps = async (ctx) => {
    if (_isEmpty(ctx.query.keyword)) {
        return {
            products: [],
            pagination: { currentPage: ctx.query.page || 1, limit: 10 },
            keyword: ctx.query.keyword,
            category: ctx.query.category,
        };
    }

    await ctx.store.dispatch(
        getProductsByKeyword({
            keyword: ctx.query.keyword,
            ...(ctx.query.page
                ? { currentPage: ctx.query.page, limit: 10 }
                : { currentPage: 1, limit: 10 }),
            ...(ctx.query.category ? { category: ctx.query.category } : {}),
        })
    );

    return {
        products: ctx.store.getState().product.allProducts,
        pagination: ctx.store.getState().product.pagination,
        keyword: ctx.query.keyword,
        category: ctx.query.category,
    };
};

export default SearchResultsPage;
