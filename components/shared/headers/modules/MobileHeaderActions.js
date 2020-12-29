import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniCart from './MiniCart';

class MobileHeaderActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { auth } = this.props;
        return (
            <div className="header__actions">
                <MiniCart />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(MobileHeaderActions);
