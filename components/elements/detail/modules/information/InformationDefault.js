import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addItem } from '../../../../../store/cart/action';
import _map from 'lodash/map';
import mapper from '../../../../../util/mapper';

class InformationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { product } = this.props;
        let tempProduct = product;
        tempProduct.quantity = this.state.quantity;
        this.props.dispatch(addItem(product));
    };

    handleIncreaseItemQty = (e) => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    render() {
        const { product, currency } = this.props;
        return (
            <div className="ps-product__info">
                <h1>{product.title}</h1>

                {product.sale === true ? (
                    <h4 className="ps-product__price sale">
                        <del className="mr-2">{product.salePrice}</del>
                        {Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        }).format(product.price)}
                    </h4>
                ) : (
                    <h4 className="ps-product__price">
                        {Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        }).format(product.price)}
                    </h4>
                )}
                <div className="ps-product__desc">
                    <p>
                        Trạng thái:
                        <a>
                            <strong
                                className={`${
                                    product.status === 2
                                        ? 'ps-tag'
                                        : 'ps-tag--out-stock'
                                }`}>
                                {' '}
                                {mapper(product.status)}
                            </strong>
                        </a>
                    </p>
                    <ul className="ps-list--dot">
                        {_map(product.features, (f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>Số lượng mua</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={this.handleIncreaseItemQty.bind(this)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={this.handleDecreaseItemQty.bind(this)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <input
                                className="form-control"
                                type="text"
                                placeholder={this.state.quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={
                            product.status === 2
                                ? this.handleAddItemToCart.bind(this)
                                : () => {}
                        }>
                        {product.status === 2
                            ? 'Thêm vào giỏ hàng'
                            : 'Ngừng kinh doanh'}
                    </a>
                </div>
                <div className="ps-product__specification">
                    <p className="categories">
                        <strong> Loại sản phẩm:</strong>
                        {_map(product.categories, (c) => (
                            <Link href={`/?category=${c.value}`}>
                                <a>{c.name}</a>
                            </Link>
                        ))}
                    </p>
                    <p className="tags">
                        <strong> Thẻ:</strong>
                        {_map(product.tags, (t) => (
                            <a>{t}</a>
                        ))}
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};

export default connect(mapStateToProps)(InformationDefault);
