import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
import BestSaleItems from './modules/BestSaleItems';
import RecommendItems from './modules/RecommendItems';

import _map from 'lodash/map';
import _isUndefined from 'lodash/isUndefined';

class LayoutShop extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        listView: true,
    };

    handleChangeViewMode = (event) => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    render() {
        const { products: allProducts, pagination, query } = this.props;
        const queryString = _isUndefined(query.category)
            ? ''
            : `&categoryId=${query.category}`;

        const viewMode = this.state.listView;
        return (
            <div className="ps-layout--shop">
                <ShopWidget />
                <div className="ps-layout__right">
                    <div className="ps-shopping">
                        <BestSaleItems />
                        <RecommendItems />
                        <div className="ps-shopping__header">
                            <p>
                                Có
                                <strong className="mr-2 ml-2">
                                    {allProducts ? allProducts.length : 0}
                                </strong>
                                sản phẩm
                            </p>
                            <div className="ps-shopping__actions">
                                <select
                                    className="ps-select form-control"
                                    data-placeholder="Sắp xếp">
                                    <option>Theo thời gian</option>
                                    <option>Theo độ phổ biến</option>
                                    <option>Giá tăng dần</option>
                                    <option>Giá giảm dần</option>
                                </select>
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
                                                      className="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 "
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
                                                    href={`?page=${
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
                                                    href={`?page=${
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
export default connect(mapStateToProps)(LayoutShop);
