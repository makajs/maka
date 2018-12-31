import pkgJson from '../package.json'
import { actionMixin, registerComponent } from 'maka'
import './style.less'
import React from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/radar';

import 'echarts/lib/chart/map';
import 'echarts/lib/chart/treemap';
import 'echarts/lib/chart/graph';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/chart/funnel';
import 'echarts/lib/chart/parallel';
import 'echarts/lib/chart/sankey';
import 'echarts/lib/chart/boxplot';
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/lines';
import 'echarts/lib/chart/heatmap';

import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/parallel';
import 'echarts/lib/component/singleAxis';
import 'echarts/lib/component/brush';

import 'echarts/lib/component/title';

import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';

import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';

import 'echarts/lib/component/timeline';


import 'zrender/lib/vml/vml';


const name = pkgJson.name

const EcharsComponent = (props) => (<ReactEchartsCore {...props} echarts={echarts} />)

EcharsComponent.registerTheme = echarts.registerTheme

registerComponent('Echarts', EcharsComponent)

const state = {
    data: {
        content: 'hello ',
        input: ''
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onChange = (e) => {
        this.base.setState({ 'data.input': e.target.value })
        console.log(this.base.getState('data.input'))
    }
}

const view = {
    component: 'div',
    className: 'echarts',
    children: [{
        component: 'Echarts',
        style: { width: 1000, height: 500 },
        option: {
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    }, {
        component: 'Echarts',
        style: { width: 1000, height: 500 },
        option: {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        }

    }]

}

export {
    name,
    state,
    action,
    view
}