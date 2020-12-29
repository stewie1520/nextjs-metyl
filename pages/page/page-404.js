import React from 'react';
import FooterFullwidth from '../../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../../components/shared/headers/HeaderTechnology';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import Link from 'next/link';

const Page404 = () => {
    return (
        <div className="site-content">
            <HeaderTechnology />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        <figure>
                            <img src="/static/img/404.jpg" alt="" />
                            <h3>Không tìm thấy trang</h3>
                            <p>
                                Trang bạn tìm kiếm không tồn tại, vui lòng kiểm
                                tra lại hoặc quay về
                                <Link href="/">
                                    <a> Trang chủ</a>
                                </Link>
                            </p>
                        </figure>
                        <form
                            className="ps-form--widget-search"
                            action="do_action"
                            method="get">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <FooterFullwidth />
        </div>
    );
};

export default Page404;
