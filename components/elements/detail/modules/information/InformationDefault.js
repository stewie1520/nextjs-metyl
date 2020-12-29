import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addItem } from '../../../../../store/cart/action';

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
                        <del className="mr-2">
                            {currency ? currency.symbol : '$'}
                            {product.salePrice}
                        </del>
                        {currency ? currency.symbol : '$'}
                        {product.price}
                    </h4>
                ) : (
                    <h4 className="ps-product__price">
                        {currency ? currency.symbol : '$'}
                        {product.price}
                    </h4>
                )}
                <div className="ps-product__desc">
                    <p>
                        Trạng thái:
                        <a href="shop-default.html">
                            <strong className="ps-tag--out-stock">
                                {' '}
                                Out of stock
                            </strong>
                        </a>
                    </p>
                    <ul className="ps-list--dot">
                        <li>Unrestrained and portable active stereo speaker</li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li>
                            Double-ended Coil Cord with 3.5mm Stereo Plugs
                            Included
                        </li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
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
                        onClick={this.handleAddItemToCart.bind(this)}>
                        Thêm vào giỏ hàng
                    </a>
                </div>
                <div className="ps-product__specification">
                    <p>
                        <strong>SKU:</strong> SF1133569600-1
                    </p>
                    <p className="categories">
                        <strong> Loại sản phẩm:</strong>
                        <a>Consumer Electronics</a>
                    </p>
                    <p className="tags">
                        <strong> Thẻ</strong>
                        <Link href="/shop">
                            <a>sofa</a>
                        </Link>
                        <Link href="/shop">
                            <a>technologies</a>
                        </Link>
                        <Link href="/shop">
                            <a>wireless</a>
                        </Link>
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
