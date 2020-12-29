import React from 'react';
import Link from 'next/link';

import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HeaderTechnology from '../components/shared/headers/HeaderTechnology';

function Error({ statusCode }) {
    return (
        <div className="site-content">
            <HeaderTechnology />
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        {statusCode ? (
                            <figure>
                                <img src="/static/img/404.jpg" alt="" />
                                <h3>Không tìm thấy trang bạn yêu cầu</h3>
                                <p>
                                    Trang bạn tìm kiếm không tồn tại, hãy thử
                                    tìm kiếm một trang khác hoặc quay về
                                    <Link href="/">
                                        <a> Trang chủ</a>
                                    </Link>
                                </p>
                            </figure>
                        ) : (
                            <figure>
                                <h3>
                                    Đã có lỗi xảy ra, vui lòng refresh lại trình
                                    duyệt
                                </h3>
                            </figure>
                        )}
                    </div>
                </div>
            </div>
            <FooterFullwidth />
        </div>
    );
}

export default Error;
