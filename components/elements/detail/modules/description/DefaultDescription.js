import React, { Component } from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import PartialDescription from './PartialDescription';
class DefaultDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product } = this.props;
        return (
            <div>
                <div className="ps-product__content ps-tab-root">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Thông tin chi tiết" key="1">
                            <PartialDescription product={product} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default DefaultDescription;
