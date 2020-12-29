import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailDefault';
import InformationDefault from './modules/information/InformationDefault';
import DefaultDescription from './modules/description/DefaultDescription';

class ProductDetailFullwidth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (
            <div className="ps-product--detail ps-product--fullwidth">
                {product ? (
                    <div className="ps-product__header">
                        <ThumbnailDefault product={product} />
                        <InformationDefault product={product} />
                    </div>
                ) : (
                    ''
                )}
                <DefaultDescription product={product} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.product;
};

export default connect(mapStateToProps)(ProductDetailFullwidth);
