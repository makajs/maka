import React from 'react'
import { getComponent } from 'maka'


export default {
    component: 'antd.Card',
    bordered: false,
    children: [{
        component: 'antdpro.DescriptionList',
        size: 'large',
        title: '退款申请',
        style: { marginBottom: 32 },
        children: [{
            component: 'antdpro.DescriptionList.Description',
            term: '取货单号',
            children: '1000000000'
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '状态',
            children: '已取货'
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '销售单号',
            children: '1234123421'
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '子订单',
            children: '3214321432'
        }]
    }, {
        component: 'antd.Divider',
        style: { marginBottom: 32 },
    }, {
        component: 'antdpro.DescriptionList',
        size: 'large',
        title: '用户信息',
        style: { marginBottom: 32 },
        children: [{
            component: 'antdpro.DescriptionList.Description',
            term: '用户姓名',
            children: '付小小',
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '联系电话',
            children: '18100000000',
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '常用快递',
            children: '菜鸟仓储',
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '取货地址',
            children: '浙江省杭州市西湖区万塘路18号',
        }, {
            component: 'antdpro.DescriptionList.Description',
            term: '备注',
            children: '无',
        }]

    }, {
        component: 'antd.Divider',
        style: { marginBottom: 32 },
    }, {
        component: 'div',
        className: `{{$styles('title')}}`,
        children: '退货商品'
    }, {
        component: 'antd.Table',
        style: { marginBottom: 24 },
        pagination: false,
        dataSource: '{{$getGoodsData()}}',
        columns: '{{$getGoodsColumns()}}',
        rowKey: 'id'
    }, {
        component: 'div',
        className: `{{$styles('title')}}`,
        children: '退货进度'
    }, {
        component: 'antd.Table',
        style: { marginBottom: 16 },
        pagination: false,
        dataSource: '{{data.basicProgress}}',
        columns: [{
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '当前进度',
            dataIndex: 'rate',
            key: 'rate',
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: text => {
                const Badge = getComponent('antd.Badge')
                return text === 'success' ?
                    (<Badge status="success" text="成功" />) :
                    (<Badge status="processing" text="进行中" />)
                }
        }, {
            title: '操作员ID',
            dataIndex: 'operator',
            key: 'operator',
        }, {
            title: '耗时',
            dataIndex: 'cost',
            key: 'cost',
        }],
        rowKey: 'id'
    }]
}