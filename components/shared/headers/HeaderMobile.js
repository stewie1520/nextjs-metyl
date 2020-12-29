import React, { Component } from 'react';
import Link from 'next/link';
import MobileHeaderActions from './modules/MobileHeaderActions';

class HeaderMobile extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <header className="header header--mobile">
                <div className="header__top">
                    <div className="header__left">
                        <p>Metyl - Mua sắm không giới hạn!</p>
                    </div>
                </div>
                <div className="navigation--mobile">
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo_light.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="navigation__right">
                        <MobileHeaderActions />
                    </div>
                </div>
                <div className="ps-search--mobile">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default HeaderMobile;
