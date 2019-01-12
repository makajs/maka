const SimpleForm = {
    component: 'antd.Form',
    _visible: '{{!data.expand}}',
    onSubmit: '{{$search}}',
    layout: 'inline',
    children: [{
        component: 'antd.Row',
        gutter: { md: 8, lg: 24, xl: 48 },
        children: [{
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '规则名称',
                children: {
                    component: 'antd.Input',
                    placeholder: '请输入',
                    _decorator: `{{$getFieldDecorator('name')}}`
                }
            }
        }, {
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '使用状态',
                children: {
                    component: 'antd.Select',
                    placeholder: '请选择',
                    style: { width: '100%' },
                    children: [{
                        component: 'antd.Select.Option',
                        value: 0,
                        children: '关闭'
                    }, {
                        component: 'antd.Select.Option',
                        value: 1,
                        children: '运行中'
                    }],
                    _decorator: `{{$getFieldDecorator('status')}}`
                }
            }
        }, {
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'span',
                className: `{{$styles('submitButtons')}}`,
                children: [{
                    component: 'antd.Button',
                    type: 'primary',
                    htmlType: "submit",
                    children: '查询',
                }, {
                    component: 'antd.Button',
                    style: { marginLeft: 8 },
                    onClick: '{{$reset}}',
                    children: '重置'
                }, {
                    component: 'a',
                    style: { marginLeft: 8 },
                    onClick: '{{$toggleForm}}',
                    children: ['展开', {
                        component: 'antd.Icon',
                        type: 'down'
                    }]
                }]
            }
        }]
    }]
}

const AdvancedForm = {
    component: 'antd.Form',
    _visible: '{{data.expand}}',
    onSubmit: '{{$search}}',
    layout: 'inline',
    children: [{
        component: 'antd.Row',
        gutter: { md: 8, lg: 24, xl: 48 },
        children: [{
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '规则名称',
                children: {
                    component: 'antd.Input',
                    placeholder: '请输入',
                    _decorator: `{{$getFieldDecorator('name')}}`
                }
            }
        }, {
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '使用状态',
                children: {
                    component: 'antd.Select',
                    placeholder: '请选择',
                    style: { width: '100%' },
                    children: [{
                        component: 'antd.Select.Option',
                        value: 0,
                        children: '关闭'
                    }, {
                        component: 'antd.Select.Option',
                        value: 1,
                        children: '运行中'
                    }],
                    _decorator: `{{$getFieldDecorator('status')}}`
                }
            }
        }, {
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '调用次数',
                children: {
                    component: 'antd.InputNumber',
                    style: { width: '100%' },
                    _decorator: `{{$getFieldDecorator('number')}}`
                }
            }
        }]
    }, {
        component: 'antd.Row',
        gutter: { md: 8, lg: 24, xl: 48 },
        children: [{
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '更新日期',
                children: {
                    component: 'antd.DatePicker',
                    style: { width: '100%' },
                    placeholder: '请输入更新日期',
                    _decorator: `{{$getFieldDecorator('date')}}`
                }
            }
        }, {
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '使用状态',
                children: {
                    component: 'antd.Select',
                    placeholder: '请选择',
                    style: { width: '100%' },
                    children: [{
                        component: 'antd.Select.Option',
                        value: 0,
                        children: '关闭'
                    }, {
                        component: 'antd.Select.Option',
                        value: 1,
                        children: '运行中'
                    }],
                    _decorator: `{{$getFieldDecorator('status3')}}`

                }
            }
        }, {
            component: 'antd.Col',
            md: 8, sm: 24,
            children: {
                component: 'antd.Form.Item',
                label: '使用状态',
                children: {
                    component: 'antd.Select',
                    placeholder: '请选择',
                    style: { width: '100%' },
                    children: [{
                        component: 'antd.Select.Option',
                        value: 0,
                        children: '关闭'
                    }, {
                        component: 'antd.Select.Option',
                        value: 1,
                        children: '运行中'
                    }],
                    _decorator: `{{$getFieldDecorator('status4')}}`

                }
            }
        }]
    }, {
        component: 'div',
        style: { overflow: 'hidden' },
        children: {
            component: 'div',
            style: { float: 'right', marginBottom: 24 },
            children: [{
                component: 'antd.Button',
                type: 'primary',
                htmlType: 'submit',
                children: '查询'
            }, {
                component: 'antd.Button',
                style: { marginLeft: 8 },
                onClick: '{{$reset}}',
                children: '重置'
            }, {
                component: 'a',
                style: { marginLeft: 8 },
                onClick: '{{$toggleForm}}',
                children: ['收起', {
                    component: 'antd.Icon',
                    type: 'up'
                }]

            }]
        }
    }]
}
export default {
    component: 'div',
    className: `{{$styles('tableListForm')}}`,
    children: [SimpleForm, AdvancedForm]
}