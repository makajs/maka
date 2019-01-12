
const formItemLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 12 },
    },
}


const StandardFormRow = ({ title, children, last, block, grid, ...rest }) => {
    return {
        component: 'div',
        className: `{{{
            return $classnames($styles('standardFormRow'), {
                [$styles('standardFormRowBlock')]: ${block},
                [$styles('standardFormRowLast')]: ${last},
                [$styles('standardFormRowGrid')]: ${grid},
            })
        }}}`,
        ...rest,
        children: [{
            component: 'div',
            className: `{{$styles('label')}}`,
            children: {
                component: 'span',
                children: title
            },
            _visible: !!title
        }, {
            component: 'div',
            className: `{{$styles('content')}}`,
            children
        }]
    }
}

export default {
    component: 'antd.Card',
    bordered: false,
    children: [{
        component: 'antd.Form',
        layout: 'inline',
        children: [
            StandardFormRow({
                title: '所属类目',
                block: true,
                style: { paddingBottom: 11 },
                children: {
                    component: 'antd.Form.Item',
                    children: {
                        component: 'antdpro.TagSelect',
                        expandable: true,
                        children: [{
                            _for: 'item in data.categorys',
                            component: 'antdpro.TagSelect.Option',
                            value: '{{item.key}}',
                            children: '{{item.value}}'
                        }],
                        _decorator: `{{$getFieldDecorator('category')}}`
                    },
                }
            }),
            StandardFormRow({
                title: '其它选项',
                grid: true,
                last: true,
                children: [{
                    component: 'antd.Row',
                    gutter: 16,
                    children: [{
                        component: 'antd.Col',
                        xl: 8, lg: 10, md: 12, sm: 24, xs: 24,
                        children: [{
                            component: 'antd.Form.Item',
                            ...formItemLayout,
                            label: "活跃用户",
                            children: [{
                                component: 'antd.Select',
                                placeholder: "不限",
                                style: { maxWidth: 200, width: '100%' },
                                children: {
                                    component: 'antd.Select.Option',
                                    value: 'lisa',
                                    children: '王昭君'
                                },
                                _decorator: `{{$getFieldDecorator('user',{})}}`
                            }]
                        }]
                    },{
                        component: 'antd.Col',
                        xl: 8, lg: 10, md: 12, sm: 24, xs: 24,
                        children: [{
                            component: 'antd.Form.Item',
                            ...formItemLayout,
                            label: "好评度",
                            children: [{
                                component: 'antd.Select',
                                placeholder: "不限",
                                style: { maxWidth: 200, width: '100%' },
                                children: [{
                                    component: 'antd.Select.Option',
                                    value: 'good',
                                    children: '优秀'
                                },{
                                    component: 'antd.Select.Option',
                                    value: 'normal',
                                    children: '普通'
                                }],
                                _decorator: `{{$getFieldDecorator('rate',{})}}`
                            }]
                        }]
                    }]
                }]
            })
        ]
    }]
}
