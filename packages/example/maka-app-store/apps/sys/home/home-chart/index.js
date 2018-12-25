import pkgJson from './package.json'
import { actionMixin, fetch } from 'maka'
import './style.less'
import './mock'

const name = pkgJson.name

const state = {
    data: {
        xAxisData: [],
        seriesData: [[],[]]
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = async () => {
        var resp = await fetch.post('/v1/home/chart', {})
        this.base.ss({
            'data': resp,
        })
    }
}

const view = {
    component: 'div',
    className:'home-chart',
    children: [{
        component: 'Echarts',
        option: {
            title: {
                text: '统计',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蒸发量', '降水量']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: '{{data.xAxisData}}'
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: '{{data.seriesData[0]}}',
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: '{{data.seriesData[1]}}',
                    markPoint: {
                        data: [
                            { type: 'max', name: '年最高', },
                            { type: 'min', name: '年最低', }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        }
    }]
}

export {
    name,
    state,
    action,
    view
}