import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import {
    getProductsByPrice,
    getProductsByBrands,
    getAllCategories,
} from '../../../../store/product/action';
import { Slider, Checkbox } from 'antd';
import Link from 'next/link';
import _isEqual from 'lodash/isEqual';

class ShopWidget extends Component {
    constructor(props) {
        super(props);
    }

    handleChangeRange(value) {
        this.props.dispatch(getProductsByPrice(value));
    }

    componentDidMount(prevProps, prevState) {
        if (!_isEqual(this.props.categories, prevState)) {
            this.props.dispatch(getAllCategories());
        }
    }

    componentWillUnmount() {
        this.props.dispatch(getProductsByPrice([0, 10000000]));
    }

    render() {
        const { categories: shopCategories, minPrice, maxPrice } = this.props;
        return (
            <div className="ps-layout__left">
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Danh mục sản phẩm</h4>
                    <ul className="ps-list--categories">
                        {shopCategories.map((category) => (
                            <li key={category.text}>
                                <Link href={category.url}>
                                    <a>{category.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Giá bán</h4>
                    <figure>
                        <Slider
                            range
                            defaultValue={[minPrice, maxPrice]}
                            max={10000000}
                            onAfterChange={this.handleChangeRange.bind(this)}
                        />
                        <p>
                            Từ: {minPrice}đ đến
                            {maxPrice}đ
                        </p>
                    </figure>
                </aside>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.product;
};
export default connect(mapStateToProps)(ShopWidget);
