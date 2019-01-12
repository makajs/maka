import Warehourse from './warehourse'
import Task from './task'
import Member from './member'

export default {
    component: 'Fragment',
    children: [Warehourse, Task, Member, {
        component: 'antdpro.FooterToolbar',
        style: { width: '100%' },
        children: [{
            component: 'span',
            className: `{{$styles('errorIcon')}}`,
            _visible: '{{$getErrorCount() > 0}}',
            children: [{
                component: 'antd.Popover',
                title: "表单校验信息",
                content: {
                    _for: 'err in $getErrors()',
                    component: 'li',
                    key: '{{err.key}}',
                    className: `{{$styles('errorListItem')}}`,
                    onClick: '{{$scrollToField(err.key)}}',
                    children: [{
                        component: 'antd.Icon',
                        type: 'cross-circle-o',
                        className: `{{$styles('errorIcon')}}`,
                    }, {
                        component: 'div',
                        className: `{{$styles('errorMessage')}}`,
                        children: '{{err.value[0]}}'
                    }, {
                        component: 'div',
                        className: `{{$styles('errorField')}}`,
                        children: '{{data.fieldLabels[err.key]}}'
                    }]
                },
                overlayClassName: `{{$styles('errorPopover')}}`,
                trigger: "click",
                getPopupContainer: '{{trigger => trigger.parentNode}}',
                children: [{
                    component: 'antd.Icon',
                    type: 'exclamation-circle'
                }, `{{$getErrorCount()}}`]
            }]
        }, {
            component: 'antd.Button',
            type: "primary",
            onClick: '{{$validate}}',
            children: '提交'
        }]
    }]
}