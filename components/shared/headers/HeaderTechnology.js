import React, { Component } from 'react';
import { connect } from 'react-redux';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import Menu from '../../elements/menu/Menu';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';
import buildMenu from '../../../util/buildMenuFromFlatCategories';

class HeaderTechnology extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (number >= 300) {
            document
                .getElementById('headerSticky')
                .classList.add('header--sticky');
        } else {
            document
                .getElementById('headerSticky')
                .classList.remove('header--sticky');
        }
    };

    render() {
        const { rawCategories } = this.props;
        const rawCategoriesWithDefault = [
            { id: 0, name: 'Tất cả', children: [] },
            ...rawCategories,
        ];
        const hieracyCategories = buildMenu(rawCategoriesWithDefault);
        return (
            <header className="header header--standard" id="headerSticky">
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/">
                                <a
                                    className="ps-logo"
                                    style={{ display: 'flex' }}>
                                    <img
                                        src="/static/img/logo.svg"
                                        style={{
                                            width: '40px',
                                            marginTop: '-8px',
                                        }}
                                        alt="martfury"
                                    />
                                    <span>METYL</span>
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={hieracyCategories}
                                        className="menu--dropdown"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <ElectronicHeaderActions />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return state.product;
};

export default connect(mapStateToProps)(HeaderTechnology);
