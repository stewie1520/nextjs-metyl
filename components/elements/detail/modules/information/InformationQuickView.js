import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../../../store/cart/action';
import Link from 'next/link';
import _map from 'lodash/map';
class InformationQuickView extends Component {
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
        const { product } = this.props;
        return (
            <div className="ps-product__info">
                <h1>{product.title}</h1>
                <div className="ps-product__meta"></div>
                {product.sale === true ? (
                    <h4 className="ps-product__price sale">
                        đ{product.price} <del>đ{product.salePrice}</del>
                    </h4>
                ) : (
                    <h4 className="ps-product__price">${product.price}</h4>
                )}
                <div className="ps-product__desc">
                    <ul className="ps-list--dot">
                        {_map(product.features, (f) => (
                            <li>{f}</li>
                        ))}
                    </ul>
                </div>
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>Số lượng</figcaption>
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
                                value={this.state.quantity}
                                disabled
                            />
                        </div>
                    </figure>
                    <a
                        className="ps-btn"
                        href="#"
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Thêm vào giỏ hàng
                    </a>
                </div>
                <div className="ps-product__specification">
                    <p>
                        <strong>SKU:</strong> SF1133569600-1
                    </p>
                    <p className="categories">
                        <strong> Categories:</strong>
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
    return state.cart;
};
export default connect(mapStateToProps)(InformationQuickView);
