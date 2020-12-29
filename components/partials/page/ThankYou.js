import React from 'react';

const ThankYouContent = () => (
    <div className="ps-section--custom">
        <div className="container">
            <div className="ps-section__header">
                <h1 style={{ color: '#6bac5b', textAlign: 'center' }}>
                    Xin chúc mừng!
                </h1>
            </div>
            <div className="ps-section__content">
                <h3 style={{ color: '#2c3e50', textAlign: 'center' }}>
                    Đơn hàng của bạn đã đặt thành công
                </h3>
                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                    <img
                        src="/static/img/thankyou.svg"
                        alt="thank-you"
                        style={{ maxHeight: '400px' }}
                    />
                </p>
                <p>
                    Đơn hàng của bạn đang được chuẩn bị, nhân viên bán hàng sẽ
                    gọi điện thoại xác nhận về đơn hàng trong muộn nhất 12h làm
                    việc. Xin chân thành cảm ơn quý khách!
                </p>
            </div>
        </div>
    </div>
);

export default ThankYouContent;
