import React, { Component } from 'react';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';

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
        return (
            <header className="header header--standard" id="headerSticky">
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/">
                                <a className="ps-logo">
                                    <img
                                        src="/static/img/logo-technology.png"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={menuData.product_categories}
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

export default HeaderTechnology;
