const styles = {
    optional: 'form-basic-optional'
}

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
    },
}


const submitFormLayout = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
    },
}

export default {
    component: 'antd.Card',
    bordered: false,
    children: [{
        component: 'antd.Form',
        onSubmit: '{{$handleSubmit}}',
        hideRequiredMark: true,
        style: { marginTop: 8 },
        children: [{
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: `{{$i18n('form.title.label')}}`,
            children: [{
                component: 'antd.Input',
                placeholder: `{{$i18n('form.title.placeholder')}}`,
                _decorator: `{{$getFieldDecorator('title', {
                    rules: [{
                        required: true,
                        message: $i18n('validation.title.required')
                    }]
                })}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: `{{$i18n('form.date.label')}}`,
            children: [{
                component: 'antd.DatePicker.RangePicker',
                style: { width: '100%' },
                placeholder: [
                    `{{$i18n('form.date.placeholder.start')}}`,
                    `{{$i18n('form.date.placeholder.end')}}`,
                ],
                _decorator: `{{$getFieldDecorator('date', {
                    rules: [{
                        required: true,
                        message: $i18n('validation.date.required')
                    }]
                })}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: `{{$i18n('form.goal.label')}}`,
            children: [{
                component: 'antd.Input.TextArea',
                style: { minHeight: 32 },
                placeholder: `{{$i18n('form.goal.placeholder')}}`,
                _decorator: `{{$getFieldDecorator('goal', {
                    rules: [{
                        required: true,
                        message: $i18n('validation.goal.required')
                    }]
                })}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: `{{$i18n('form.standard.label')}}`,
            children: [{
                component: 'antd.Input.TextArea',
                style: { minHeight: 32 },
                placeholder: `{{$i18n('form.standard.placeholder')}}`,
                _decorator: `{{$getFieldDecorator('standard', {
                    rules: [{
                        required: true,
                        message: $i18n('validation.standard.required')
                    }]
                })}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: {
                component: 'span',
                children: [`{{$i18n('form.client.label')}}`, {
                    component: 'em',
                    className: styles.optional,
                    children: [`{{$i18n('form.optional')}}`, {
                        component: 'antd.Tooltip',
                        title: `{{$i18n('form.client.label.tooltip')}}`,
                        children: {
                            component: 'antd.Icon',
                            type: 'info-circle-o',
                            style: { marginRight: 4 }
                        }
                    }]
                }]
            },
            children: [{
                component: 'antd.Input',
                placeholder: `{{$i18n('form.client.placeholder')}}`,
                _decorator: `{{$getFieldDecorator('client')}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: {
                component: 'span',
                children: [`{{$i18n('form.invites.label')}}`, {
                    component: 'em',
                    className: styles.optional,
                    children: [`{{$i18n('form.optional')}}`]
                }]
            },
            children: [{
                component: 'antd.Input',
                placeholder: `{{$i18n('form.invites.placeholder')}}`,
                _decorator: `{{$getFieldDecorator('invites')}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: {
                component: 'span',
                children: [`{{$i18n('form.weight.label')}}`, {
                    component: 'em',
                    className: styles.optional,
                    children: [`{{$i18n('form.optional')}}`]
                }]
            },
            children: [{
                component: 'antd.InputNumber',
                min: 0,
                max: 100,
                placeholder: `{{$i18n('form.weight.placeholder')}}`,
                _decorator: `{{$getFieldDecorator('weight')}}`
            }, {
                component: 'span',
                className: 'ant-form-text',
                children: '%'
            }]
        }, {
            component: 'antd.Form.Item',
            ...formItemLayout,
            label: `{{$i18n('form.public.label')}}`,
            help: `{{$i18n('form.public.label.help')}}`,
            children: [{
                component: 'antd.Radio.Group',
                children: [{
                    component: 'antd.Radio',
                    value: '1',
                    children: `{{$i18n('form.public.radio.public')}}`
                }, {
                    component: 'antd.Radio',
                    value: '2',
                    children: `{{$i18n('form.public.radio.partially-public')}}`
                }, {
                    component: 'antd.Radio',
                    value: '3',
                    children: `{{$i18n('form.public.radio.private')}}`
                }],
                _decorator: `{{$getFieldDecorator('public',{initialValue:'1'})}}`
            }, {
                component: 'antd.Form.Item',
                style: { marginBottom: 0 },
                children: {
                    component: 'antd.Select',
                    mode: "multiple",
                    placeholder: `{{$i18n('form.publicUsers.placeholder') }}`,
                    style: {
                        margin: '8px 0',
                        display: `{{{debugger;return $getFieldValue('public') === '2' ? 'block' : 'none'}}}`,
                    },
                    children: [{
                        component: 'antd.Select.Option',
                        value: '1',
                        children: `{{$i18n('form.publicUsers.option.A')}}`
                    }, {
                        component: 'antd.Select.Option',
                        value: '2',
                        children: `{{$i18n('form.publicUsers.option.B')}}`
                    }, {
                        component: 'antd.Select.Option',
                        value: '3',
                        children: `{{$i18n('form.publicUsers.option.C')}}`
                    }]
                },
                _decorator: `{{$getFieldDecorator('publicUsers')}}`
            }]
        }, {
            component: 'antd.Form.Item',
            ...submitFormLayout,
            style: { marginTop: 32 },
            children: [{
                component: 'antd.Button',
                type: 'primary',
                htmlType: 'submit',
                children: `{{$i18n('form.submit')}}`
            }, {
                component: 'antd.Button',
                style: { marginLeft: 8 },
                children: `{{$i18n('form.save')}}`
            }]

        }]
    }]
}