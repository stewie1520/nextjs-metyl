import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import {
    confirmCart,
    changeProvince,
    changeDistrict,
} from '../../../../store/cart/action';

import { Form, Input, Spin, Select } from 'antd';
import _isEmpty from 'lodash/isEmpty';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const addressInfo = {
                    email: values.email,
                    name: values.name,
                    phone: values.phone,
                    address: values.address,
                    city: values.city,
                    ward: values.ward,
                    district: values.district,
                    note: values.note,
                };

                const { provinces, districts = [], wards = [] } = this.props;

                if (!_isEmpty(provinces)) {
                    const foundProvince = provinces.find(
                        (p) => p.id === addressInfo.city
                    );
                    if (foundProvince) {
                        addressInfo.city = foundProvince.name;
                    }
                }

                if (!_isEmpty(districts)) {
                    const foundDistrict = districts.find(
                        (d) => d.id === addressInfo.district
                    );
                    if (foundDistrict) {
                        addressInfo.district = foundDistrict.name;
                    }
                }

                if (!_isEmpty(wards)) {
                    const foundWard = wards.find(
                        (w) => w.id === addressInfo.ward
                    );
                    if (foundWard) {
                        addressInfo.ward = foundWard.name;
                    }
                }

                this.props.dispatch(
                    confirmCart({
                        addressInfo,
                        cartItems: this.props.cartItems,
                    })
                );
                Router.push('/page/thankyou');
            } else {
            }
        });
    };

    handleChangeProvince = (pid) => {
        this.props.dispatch(changeProvince(pid));
    };

    handleChangeDistrict = (did) => {
        this.props.dispatch(changeDistrict(did));
    };

    render() {
        const { Option } = Select;
        const { getFieldDecorator } = this.props.form;
        const {
            amount,
            cartItems,
            cartTotal,
            isProcessingCart,
            provinces,
            districts = [],
            wards = [],
        } = this.props;
        return (
            <Spin tip="Đang xử lý..." spinning={isProcessingCart}>
                <Form
                    className="ps-form--checkout"
                    onSubmit={this.handleLoginSubmit}>
                    <div className="ps-form__content">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="ps-form__billing-info">
                                    <h3 className="ps-form__heading">
                                        Địa chỉ email
                                    </h3>
                                    <div className="form-group">
                                        <Form.Item>
                                            {getFieldDecorator('email', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message:
                                                            'Email của bạn!',
                                                    },
                                                ],
                                            })(
                                                <Input
                                                    className="form-control"
                                                    type="email"
                                                    placeholder="Email của bạn"
                                                    // value={ user ? user.Email : '' }
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                    <h3 className="ps-form__heading">
                                        Địa chỉ giao hàng
                                    </h3>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator('name', {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Vui lòng điền họ tên!',
                                                            },
                                                        ],
                                                    })(
                                                        <Input
                                                            className="form-control"
                                                            type="name"
                                                            placeholder="Họ tên"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator(
                                                        'phone',
                                                        {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        'Vui lòng điền số điện thoại của bạn!',
                                                                },
                                                            ],
                                                        }
                                                    )(
                                                        <Input
                                                            className="form-control"
                                                            type="phone"
                                                            placeholder="Số điện thoại"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Form.Item>
                                            {getFieldDecorator('address', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message:
                                                            'Vui lòng điền địa chỉ của bạn!',
                                                    },
                                                ],
                                            })(
                                                <Input
                                                    className="form-control"
                                                    type="address"
                                                    placeholder="Địa chỉ giao hàng"
                                                />
                                            )}
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator('city', {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Vui lòng chọn tỉnh thành!',
                                                            },
                                                        ],
                                                    })(
                                                        _isEmpty(provinces) ? (
                                                            <Input
                                                                className="form-control"
                                                                type="city"
                                                                placeholder="Tỉnh thành"
                                                            />
                                                        ) : (
                                                            <Select
                                                                style={{
                                                                    height:
                                                                        '100%',
                                                                }}
                                                                label="Tỉnh thành"
                                                                type="city"
                                                                onChange={(
                                                                    value
                                                                ) =>
                                                                    this.handleChangeProvince(
                                                                        value
                                                                    )
                                                                }
                                                                className="form-control">
                                                                {provinces.map(
                                                                    (p) => (
                                                                        <Option
                                                                            value={
                                                                                p.id
                                                                            }
                                                                            id={
                                                                                p.id
                                                                            }>
                                                                            {
                                                                                p.name
                                                                            }
                                                                        </Option>
                                                                    )
                                                                )}
                                                            </Select>
                                                        )
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator(
                                                        'district',
                                                        {
                                                            rules: [
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        'Vui lòng chọn quận huyện!',
                                                                },
                                                            ],
                                                        }
                                                    )(
                                                        _isEmpty(districts) ? (
                                                            <Input
                                                                className="form-control"
                                                                type="district"
                                                                placeholder="Quận huyện"
                                                            />
                                                        ) : (
                                                            <Select
                                                                style={{
                                                                    height:
                                                                        '100%',
                                                                }}
                                                                type="district"
                                                                label="Quận huyện"
                                                                onChange={(
                                                                    value
                                                                ) =>
                                                                    this.handleChangeDistrict(
                                                                        value
                                                                    )
                                                                }
                                                                className="form-control">
                                                                {districts.map(
                                                                    (d) => (
                                                                        <Option
                                                                            value={
                                                                                d.id
                                                                            }
                                                                            id={
                                                                                d.id
                                                                            }>
                                                                            {
                                                                                d.name
                                                                            }
                                                                        </Option>
                                                                    )
                                                                )}
                                                            </Select>
                                                        )
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator('ward', {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message:
                                                                    'Vui lòng chọn phường xã!',
                                                            },
                                                        ],
                                                    })(
                                                        _isEmpty(wards) ? (
                                                            <Input
                                                                className="form-control"
                                                                type="ward"
                                                                placeholder="Phường xã"
                                                            />
                                                        ) : (
                                                            <Select
                                                                style={{
                                                                    height:
                                                                        '100%',
                                                                }}
                                                                type="ward"
                                                                label="Phường xã"
                                                                className="form-control">
                                                                {wards.map(
                                                                    (w) => (
                                                                        <Option
                                                                            value={
                                                                                w.name
                                                                            }
                                                                            id={
                                                                                w.id
                                                                            }>
                                                                            {
                                                                                w.name
                                                                            }
                                                                        </Option>
                                                                    )
                                                                )}
                                                            </Select>
                                                        )
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Form.Item>
                                                    {getFieldDecorator('note', {
                                                        rules: [
                                                            {
                                                                required: false,
                                                            },
                                                        ],
                                                    })(
                                                        <Input
                                                            className="form-control"
                                                            type="note"
                                                            multiple={true}
                                                            placeholder="Ghi chú của khách hàng"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-form__submit">
                                        <Link href="/account/cart">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                Quay về giỏ hàng
                                            </a>
                                        </Link>
                                        <div className="ps-block__footer">
                                            <button className="ps-btn">
                                                Đặt mua
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                <div className="ps-form__orders">
                                    <h3>Đơn hàng</h3>
                                    <div className="ps-block--checkout-order">
                                        <div className="ps-block__content">
                                            <figure>
                                                <figcaption>
                                                    <strong>Sản phẩm</strong>
                                                    <strong>tổng cộng</strong>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__items">
                                                {cartItems &&
                                                    cartItems.map((product) => (
                                                        <Link
                                                            href={`/product/${product.id}`}
                                                            key={product.id}>
                                                            <a>
                                                                <strong>
                                                                    {
                                                                        product.title
                                                                    }
                                                                    <span>
                                                                        x
                                                                        {
                                                                            product.quantity
                                                                        }
                                                                    </span>
                                                                </strong>
                                                                <small>
                                                                    {product.quantity *
                                                                        product.price}
                                                                    đ
                                                                </small>
                                                            </a>
                                                        </Link>
                                                    ))}
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Tạm tính</strong>
                                                    <small>{amount}đ</small>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__shipping">
                                                <p>
                                                    Phí trên chưa bao gồm chi
                                                    phí vận chuyển
                                                </p>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Spin>
        );
    }
}

const WrapForm = Form.create()(FormCheckoutInformation);

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
    };
};
export default connect(mapStateToProps)(WrapForm);
