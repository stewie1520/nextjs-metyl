import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';

class ProductWide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItem(product));
    };

    handleShowQuickView = (e) => {
        e.preventDefault();
        this.setState({ isQuickView: true });
    };

    handleHideQuickView = (e) => {
        e.preventDefault();
        this.setState({ isQuickView: false });
    };

    render() {
        const { product, currency } = this.props;
        let productRating = null;
        if (product.badge) {
            product.badge.map((badge) => {
                if (badge.type === 'outStock') {
                    return (productRating = (
                        <div className="ps-product__badge.out-stock">
                            {badge.value}
                        </div>
                    ));
                }
            });
        }
        return (
            <div className="ps-product ps-product--wide">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <img src={product.thumbnail} alt="martfury" />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__container">
                    <div className="ps-product__content">
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.id}`}>
                            <a className="ps-product__title">{product.title}</a>
                        </Link>
                        <ul className="ps-product__desc">
                            <li>
                                Unrestrained and portable active stereo speaker
                            </li>
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
                        {product.sale === true ? (
                            <p className="ps-product__price sale">
                                {currency ? currency.symbol : '$'}
                                {product.price}
                                <del className="ml-1">
                                    {currency ? currency.symbol : '$'}
                                    {product.salePrice}{' '}
                                </del>
                            </p>
                        ) : (
                            <p className="ps-product__price">
                                {currency ? currency.symbol : '$'}
                                {product.price}
                            </p>
                        )}
                        <a
                            className="ps-btn"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Thêm vào giỏ hàng
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductWide);
