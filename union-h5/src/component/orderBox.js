/* 业绩订单列表 */
import React from 'react'

import {stamp2Date, date2Stamp, getPreMonth} from '../utils/parseDate'

class OrderBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.orders.map((order, index) => {
                let orderDate = date2Stamp(order.orderDate)

                if (orderDate >= date2Stamp(this.props.startDate) && orderDate <= date2Stamp(this.props.endDate) + 86400000) {
                    return (
                        <div key={index}>
                            <div className="m-content">
                                <ul className="mes-list">
                                    <li>
                                        <div className="list-two">
                                            <div className="list-left">
                                                <div className="c-name">订单号：</div>{order.orderCode}
                                            </div>
                                            <div className="list-right c-bold">
                                                {order.orderType}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="c-name">订单金额：</div>
                                        <div className="c-mes c-bold">￥{order.orderFee / 100}</div>
                                    </li>
                                    <li>
                                        <div className="c-name">返佣金额：</div>
                                        <div className="c-mes c-bold">￥{order.commissionBack / 100}</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="money-box">
                                <div className="money">
                                    <span className="c-mark c-normal">已支付</span>
                                </div>
                                <div className="c-six">
                                    订单日期：{stamp2Date(order.orderDate)}
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        )
    }
}

export {OrderBox}