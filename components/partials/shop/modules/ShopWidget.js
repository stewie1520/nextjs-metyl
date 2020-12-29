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
        this.state = {
            priceMin: 0,
            priceMax: 2000,
        };
    }

    handleChangeRange(value) {
        this.setState({
            priceMin: value[0],
            priceMax: value[1],
        });
        this.props.dispatch(getProductsByPrice(value));
    }

    componentDidMount(prevProps, prevState) {
        if (!_isEqual(this.props.categories, prevState)) {
            this.props.dispatch(getAllCategories());
        }
    }

    render() {
        const { categories: shopCategories } = this.props;
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
                            defaultValue={[0, 2000]}
                            max={2000}
                            onAfterChange={this.handleChangeRange.bind(this)}
                        />
                        <p>
                            Price: ${this.state.priceMin} - $
                            {this.state.priceMax}
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
