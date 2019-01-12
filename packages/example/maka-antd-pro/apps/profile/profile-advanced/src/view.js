const Desc1 = {
    component: 'div',
    className: `{{$classnames($styles('textSecondary'), $styles('stepDescription'))}}`,
    children: ['曲丽丽', {
        component: 'antd.Icon',
        type: 'dingding-o',
        style: { marginLeft: 8 }
    }, {
            component: 'div',
            children: '2016-12-12 12:32'
        }]
}

const Desc2 = {
    component: 'div',
    className: `{{$styles('stepDescription')}}`,
    children: ['周毛毛', {
        component: 'antd.Icon',
        type: 'dingding-o',
        style: { color: '#00A0E9', marginLeft: 8 }
    }, {
            component: 'div',
            children: {
                component: 'a',
                children: '催一下'
            },
            children: '2016-12-12 12:32'
        }]
}

const OperationTabList = [
    {
        key: '1',
        tab: '操作日志一',
    },
    {
        key: '2',
        tab: '操作日志二',
    },
    {
        key: '3',
        tab: '操作日志三',
    },
]


const Columns = [{
    title: '操作类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '操作人',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '执行结果',
    dataIndex: 'status',
    key: 'status',
    render: {
        _function: '(text)',
        component: 'antd.Badge',
        status: `{{text === 'agree' ? 'success': 'error'}}`,
        text: `{{text === 'agree' ? '成功': '驳回'}}`,
    }
}, {
    title: '操作时间',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
}, {
    title: '备注',
    dataIndex: 'memo',
    key: 'memo',
}]

export default {
    component: 'Fragment',
    children: [{
        component: 'antd.Card',
        title: '进度流程',
        style: { marginBottom: 24 },
        bordered: false,
        children: [{
            component: 'antd.Steps',
            direction: '{{data.stepDirection}}',
            progressDot: '{{data.customDot}}',
            current: 1,
            children: [{
                component: 'antd.Steps.Step',
                title: '创建项目',
                description: Desc1
            }, {
                component: 'antd.Steps.Step',
                title: '部门初审',
                description: Desc2
            }, {
                component: 'antd.Steps.Step',
                title: '财务复核',
            }, {
                component: 'antd.Steps.Step',
                title: '完成',
            }]
        }]
    }, {
        component: 'antd.Card',
        title: '用户信息',
        style: { marginBottom: 24 },
        bordered: false,
        children: [{
            component: 'antdpro.DescriptionList',
            style: { marginBottom: 24 },
            children: [{
                component: 'antdpro.DescriptionList.Description',
                term: '用户姓名',
                children: '付小小'
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: '会员卡号',
                children: '32943898021309809423'
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: '身份证',
                children: '3321944288191034921'
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: '联系方式',
                children: '18112345678'
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: '联系地址',
                children: '曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口'
            }]
        }, {
            component: 'antdpro.DescriptionList',
            style: { marginBottom: 24 },
            title: '信息组',
            children: [{
                component: 'antdpro.DescriptionList.Description',
                term: '某某数据',
                children: '725'
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: '该数据更新时间',
                children: '2017-08-08'
            }, {
                component: 'antdpro.DescriptionList.Description',
                children: ' '
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: {
                    component: 'span',
                    children: ['某某数据', {
                        component: 'antd.Tooltip',
                        title: '数据说明',
                        children: {
                            component: 'antd.Icon',
                            style: { color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 },
                            type: 'info-circle-o'
                        }
                    }]
                },
                children: '725'
            }, {
                component: 'antdpro.DescriptionList.Description',
                term: '该数据更新时间',
                children: '2017-08-08'
            }]
        }, {
            component: 'h4',
            style: { marginBottom: 16 },
            children: '信息组',
            children: [{
                component: 'antd.Card',
                type: "inner",
                title: "多层级信息组",
                children: [{
                    component: 'antdpro.DescriptionList',
                    style: { marginBottom: 16 },
                    title: '组名称',
                    children: [{
                        component: 'antdpro.DescriptionList.Description',
                        term: '负责人',
                        children: '林东东'
                    }, {
                        component: 'antdpro.DescriptionList.Description',
                        term: '角色码',
                        children: '1234567'
                    }, {
                        component: 'antdpro.DescriptionList.Description',
                        term: '所属部门',
                        children: 'XX公司 - YY部'
                    }, {
                        component: 'antdpro.DescriptionList.Description',
                        term: '过期时间',
                        children: '2017-08-08'
                    }, {
                        component: 'antdpro.DescriptionList.Description',
                        term: '描述',
                        children: '这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...'
                    }]
                }, {
                    component: 'antd.Divider',
                    style: { margin: '16px 0' },

                }, {
                    component: 'antdpro.DescriptionList',
                    size: 'small',
                    title: '组名称',
                    col: '1',
                    style: { marginBottom: 16 },
                    children: [{
                        component: 'antdpro.DescriptionList.Description',
                        term: '学名',
                        children: `Citrullus lanatus (Thunb.) Matsum. et
                        Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.`
                    }]
                }, {
                    component: 'antd.Divider',
                    style: { margin: '16px 0' },
                }, {
                    component: 'antdpro.DescriptionList',
                    size: 'small',
                    title: '组名称',
                    col: '1',
                    style: { marginBottom: 16 },
                    children: [{
                        component: 'antdpro.DescriptionList.Description',
                        term: '负责人',
                        children: `付小小`
                    }, {
                        component: 'antdpro.DescriptionList.Description',
                        term: '角色码',
                        children: `1234568`
                    }]
                }]
            }, {
                component: 'antd.Card',
                title: '用户近半年来电记录',
                style: { marginBottom: 24 },
                bordered: false,
                children: {
                    component: 'div',
                    className: `{{$styles('noData')}}`,
                    children: [{
                        component: 'antd.Icon',
                        type: 'frown-o'
                    }, '暂无数据']
                }
            }, {
                component: 'antd.Card',
                className: `{{$styles('tabsCard')}}`,
                bordered: false,
                tabList: OperationTabList,
                onTabChange: '{{$operationTabChange}}',
                children: {
                    component: 'antd.Table',
                    pagination: false,
                    dataSource: `{{{debugger; return data['advancedOperation'+ data.operationkey]}}}`,
                    columns: Columns
                }
            }]
        }]
    }]

}