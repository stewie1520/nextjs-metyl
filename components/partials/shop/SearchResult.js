import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import {
    getProducts,
    getProductsByKeyword,
} from '../../../store/product/action';

import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
class SearchResult extends Component {
    state = {
        listView: true,
        pageNumber: 0,
        results: [],
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {
        const {
            products: allProducts,
            pagination,
            keyword,
            category,
        } = this.props;
        const viewMode = this.state.listView;
        let queryString = '';

        if (keyword) {
            queryString += `&keyword=${keyword}`;
        }
        if (category) {
            queryString += `&category=${category}`;
        }

        return (
            <div className="ps-layout--shop">
                <ShopWidget />
                <div className="ps-layout__right">
                    <div className="ps-shopping">
                        <div className="ps-shopping__header">
                            {allProducts && allProducts.length > 0 ? (
                                <p>
                                    <span className="mr-1">Tìm thấy</span>
                                    <strong>
                                        {allProducts ? allProducts.length : 0}
                                    </strong>
                                </p>
                            ) : (
                                <p>Không tìm thấy bất kỳ sản phẩm nào</p>
                            )}

                            <div className="ps-shopping__actions">
                                <div className="ps-shopping__view">
                                    <p>Hiển thị</p>
                                    <ul className="ps-tab-list">
                                        <li
                                            className={
                                                viewMode === true
                                                    ? 'active'
                                                    : ''
                                            }>
                                            <a
                                                href="#"
                                                onClick={
                                                    this.handleChangeViewMode
                                                }>
                                                <i className="icon-grid"></i>
                                            </a>
                                        </li>
                                        <li
                                            className={
                                                viewMode !== true
                                                    ? 'active'
                                                    : ''
                                            }>
                                            <a
                                                href="#"
                                                onClick={
                                                    this.handleChangeViewMode
                                                }>
                                                <i className="icon-list4"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="ps-shopping__content">
                            {viewMode === true ? (
                                <div className="ps-shopping-product">
                                    <div className="row">
                                        {allProducts && allProducts.length > 0
                                            ? allProducts.map((item) => (
                                                  <div
                                                      className="col-lg-4 col-md-4 col-sm-6 col-6 "
                                                      key={item.id}>
                                                      <Product product={item} />
                                                  </div>
                                              ))
                                            : ''}
                                    </div>
                                </div>
                            ) : (
                                <div className="ps-shopping-product">
                                    {allProducts && allProducts.length > 0
                                        ? allProducts.map((item) => (
                                              <ProductWide
                                                  product={item}
                                                  key={item.id}
                                              />
                                          ))
                                        : ''}
                                </div>
                            )}
                            <div className="ps-shopping__footer">
                                <div className="ps-pagination">
                                    <ul className="pagination">
                                        {pagination.currentPage !== 1 && (
                                            <li>
                                                <a
                                                    href={`/search?page=${
                                                        pagination.currentPage -
                                                        1
                                                    }${queryString}`}>
                                                    Trước
                                                    <i className="icon-chevron-left"></i>
                                                </a>
                                            </li>
                                        )}

                                        <li className="active">
                                            <a>{pagination.currentPage}</a>
                                        </li>
                                        {pagination.currentPage !==
                                            pagination.totalPage && (
                                            <li>
                                                <a
                                                    href={`/search?page=${
                                                        pagination.currentPage +
                                                        1
                                                    }${queryString}`}>
                                                    Tiếp
                                                    <i className="icon-chevron-right"></i>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.product;
};
export default withRouter(connect(mapStateToProps)(SearchResult));
