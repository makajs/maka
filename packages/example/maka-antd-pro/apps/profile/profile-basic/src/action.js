import React from 'react'
import { actionMixin } from 'maka'




@actionMixin('base')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }


    renderContent = (value, row, index) => {
        var basicGoods = this.base.gs('data.basicGoods')
        const obj = {
            children: value,
            props: {},
        };
        if (index === basicGoods.length) {
            obj.props.colSpan = 0;
        }
        return obj;
    };


    getGoodsData = () => {
        let goodsData = [];
        var basicGoods = this.base.gs('data.basicGoods')
        if (basicGoods.length) {
            let num = 0;
            let amount = 0;
            basicGoods.forEach(item => {
                num += Number(item.num);
                amount += Number(item.amount);
            });
            goodsData = basicGoods.concat({
                id: '总计',
                num,
                amount,
            });
        }
        return goodsData
    }


    getGoodsColumns = () => {
        var basicGoods = this.base.gs('data.basicGoods')
        return [{
            title: '商品编号',
            dataIndex: 'id',
            key: 'id',
            render: (text, row, index) => {
                if (index < basicGoods.length) {
                    return <a href="">{text}</a>;
                }
                return {
                    children: <span style={{ fontWeight: 600 }}>总计</span>,
                    props: {
                        colSpan: 4,
                    },
                };
            },
        },
        {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
            render: this.renderContent,
        },
        {
            title: '商品条码',
            dataIndex: 'barcode',
            key: 'barcode',
            render: this.renderContent,
        },
        {
            title: '单价',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            render: this.renderContent,
        },
        {
            title: '数量（件）',
            dataIndex: 'num',
            key: 'num',
            align: 'right',
            render: (text, row, index) => {
                if (index < basicGoods.length) {
                    return text;
                }
                return <span style={{ fontWeight: 600 }}>{text}</span>;
            },
        },
        {
            title: '金额',
            dataIndex: 'amount',
            key: 'amount',
            align: 'right',
            render: (text, row, index) => {
                if (index < basicGoods.length) {
                    return text;
                }
                return <span style={{ fontWeight: 600 }}>{text}</span>;
            },
        }];
    }

    getBasicProgress = () => {
        
    }
}