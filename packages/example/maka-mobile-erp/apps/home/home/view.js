export default {
    component: 'div',
    className: 'home',
    children: [{
        component: 'antd.PullToRefresh',
        onRefresh: '{{$load}}',
        style: { overflow: 'auto' },
        children: [{
            component: 'antd.Carousel',
            autoplay: true,
            children: [{
                component: 'div',
                style: {height: 150, background: '#F99C89', color: '#fff'},
                children: ''
            },{
                component: 'div',
                style: {height: 150, background: '#FFD37C', color: '#fff'},
                children: ''
            }]
        },{
            _for: 'item in data.incomeAndPays',
            component: 'div',
            children: [{
                component: 'antd.List',
                onClick: `{{$openList(item)}}`,
                children: [{
                    component: 'antd.List.Item',
                    children: '{{item.title}}',
                    arrow: 'horizontal',
                    extra: {
                        component: 'div',
                        className: 'home-label',
                        children: '{{item.date}}'
                    }
                }]
            }, {
                component: 'antd.Flex',
                children: [{
                    component: 'antd.Flex.Item',
                    children: [{
                        component: 'div',
                        className: 'home-label',
                        children: '收入'
                    }, {
                        component: 'div',
                        className: 'home-income-value',
                        children: '{{$numberHelper.format(item.income,2)}}'
                    }]
                }, {
                    component: 'antd.Flex.Item',
                    children: [{
                        component: 'div',
                        className: 'home-label',
                        children: '支出'
                    }, {
                        component: 'div',
                        className: 'home-pay-value',
                        children: '{{$numberHelper.format(item.pay,2)}}'
                    }]
                }, {
                    component: 'antd.Flex.Item',
                    children: [{
                        component: 'div',
                        className: 'home-label',
                        children: '结余'
                    }, {
                        component: 'div',
                        className: 'home-balance-value',
                        children: '{{$numberHelper.format(item.income - item.pay,2)}}'
                    }]
                }]

            }, {
                component: 'antd.WhiteSpace'
            }]
        }, {
            component: 'antd.List',
            children: [{
                component: 'antd.List.Item',
                arrow: 'horizontal',
                extra: {
                    component: 'antd.Badge',
                    text: '{{data.todoCount}}',
                },
                onClick: `{{$openTodoList}}`,
                children: '待办'
            }]

        }, {
            component: 'antd.WhiteSpace'
        }, {
            component: 'antd.List',
            children: [{
                component: 'antd.List.Item',
                arrow: 'horizontal',
                extra: {
                    component: 'antd.Badge',
                    text: '{{data.toAuditCount}}',
                },
                onClick: `{{$openToAuditList}}`,
                children: '待审'
            }]
        }]
    }]
}