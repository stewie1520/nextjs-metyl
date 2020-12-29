import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Liên hệ với chúng tôi</h4>
            <div className="widget_content">
                <p>Tổng đài 24/7</p>
                <h3>0981 925 281</h3>
                <p>
                    KTX khu B, Đại học quốc gia TP Hồ Chí Minh <br />
                    <a href="mailto:donghuuhieu1520@gmail.com">
                        donghuuhieu1520@gmail.com
                    </a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a
                            className="facebook"
                            href="https://facebook.com/stewie1520">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="twitter"
                            href="https://twitter.com/dongedward1">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="instagram"
                            href="https://instagram.com/resol1520">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Liên kết</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Chính sách</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Vận chuyển</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Trả hàng</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/faqs">
                        <a>Câu hỏi thường gặp</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Trang dành cho nhân viên</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
