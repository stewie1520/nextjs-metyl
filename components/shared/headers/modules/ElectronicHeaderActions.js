import React, { Component } from 'react';
import { connect } from 'react-redux';
import MiniCart from './MiniCart';

class ElectronicHeaderActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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

export default connect(mapStateToProps)(ElectronicHeaderActions);
