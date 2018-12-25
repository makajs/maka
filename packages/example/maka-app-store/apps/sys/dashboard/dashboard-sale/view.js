export default {
    component: 'div',
    className: 'dashboard-sale',
    children: [{
        component: 'div',
        className: 'dashboard-sale-header',
        children: [{
            component: 'span',
            children: '总销售额'
        }, {
            component: 'antd.Icon',
            className: 'icon-softly',
            type: 'info-circle',
            title: '指标说明'
        }]
    }, {
        name: 'text',
        component: 'p',
        className: 'dashboard-sale-text',
        children: "{{{console.log($numberHelper);return '¥  ' + $numberHelper.format(data.total, 2, ',' )}}}"
    }, {
        component: 'div',
        className: 'dashboard-sale-rate',
        children: [{
            component: 'span',
            children: '周同比'
        }, {
            component: 'h2',
            children: "{{{var ret = data.WoW * 100 + '%';console.log(data,ret); return ret}}}"
        }, {
            component: 'antd.Icon',
            type: "{{data.WoW> 0 ? 'caret-up' : 'caret-down'}}",
            style: "{{({color: data.WoW> 0 ? 'red': 'green'})}}"
        }, {
            component: 'span',
            children: '日环比'
        }, {
            component: 'h2',
            children: "{{data.DoD * 100 + '%'}}"
        }, {
            component: 'antd.Icon',
            type: "{{data.DoD> 0 ? 'caret-up' : 'caret-down'}}",
            style: "{{({color: data.DoD> 0 ? 'red': 'green'})}}"
        }]

    }, {
        component: 'div',
        className: 'dashboard-sale-footer',
        children: [{
            component: 'span',
            children: '日均销售额'
        }, {
            component: 'h2',
            children: `{{ $numberHelper.format(data.average, 2, ',' )}}`
        }]
    }]
}