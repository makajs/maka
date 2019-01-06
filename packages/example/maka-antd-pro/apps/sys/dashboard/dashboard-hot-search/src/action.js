import { actionMixin } from 'maka'

@actionMixin('base', 'tableHelper', 'webapi')
export default class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = async () => {
        var resp = await this.webapi.dashboard.hotSearch({})
        this.base.ss({
            'data.userCount': resp.userCount,
            'data.searchCount': resp.searchCount,
            'data.list': resp.list,
        })
    }

    getChartOption = (data) => {
        console.log(data)
        return {
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                show: false,
                type: 'category',
                boundaryGap: false,
                data: data.x
            },
            yAxis: {
                show: false,
                type: 'value'
            },
            grid: {
                left: 0,
                right: 0,
                bottom: 15,
                top: 15
            },
            series: [{
                type: 'line',
                smooth: true,
                sampling: 'average',
                animation: false,
                itemStyle: {
                    normal: {
                        color: 'rgb(184, 134, 11)',
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10
                    },
                },
                areaStyle: {
                    normal: {
                        color: 'rgb(184, 134, 11)',
                    }
                },
                data: data.y
            }]
        }
    }
}