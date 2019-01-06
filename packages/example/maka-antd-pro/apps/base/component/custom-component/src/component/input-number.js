import React, { Component } from 'react'
import { getComponent } from 'maka'
import classNames from 'classnames'

export default class InputNumberComponent extends Component {
    state = {
        oldValue: "",
        value: "",
        max: Infinity,
        min: -Infinity,
        format: ""
    }

    constructor(props) {
        super(props)
        this.state = this.calculateState(props)
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.calculateState(nextProps))
    }

    calculateState(props) {
        let data = {}

        if (props.value !== undefined) {
            data.value = props.value + ''
            data.oldValue = data.value
        }
        else {
            data.value = ''
            data.oldValue = data.value
        }

        if (props.min !== undefined && props.min !== null && props.min !== '' && !isNaN(props.min))
            data.min = props.min

        if (props.max !== undefined && props.max !== null && props.max !== '' && !isNaN(props.max))
            data.max = props.max

        if (props.format)
            data.format = props.format

        return data
    }

    getCurrentValidValue(value) {
        let val = value
        const props = this.props

        if (val === '') {
            return ''
        } else if (!this.isNotCompleteNumber(val)) {
            val = Number(val)
            if (val < this.state.min) {
                return this.state.min
            }

            if (val > this.state.max) {
                return this.state.max
            }
        } else {
            return this.state.value
        }
        return value
    }

    /**
     * 转换为数字
     * @param  {[type]} num [description]
     * @return {[type]}     [description]
     */
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return num
        }
        return Number(num)
    }

    /**
     * 判断是否非完整数字
     * @param  {[type]}  num [description]
     * @return {Boolean}     [description]
     */
    isNotCompleteNumber(num) {
        return (
            isNaN(num) ||
            num === '' ||
            num.toString().indexOf('.') === num.toString().length - 1
        )
    }

    /**
     * 根据精度转换值
     * @param  {[type]} num [description]
     * @return {[type]}     [description]
     */
    toPrecisionAsStep(num) {
        //非完整数字直接返回, NaN,'',3444.
        if (this.isNotCompleteNumber(num) || num === '') {
            return num
        }

        //获取精度
        const precision = Math.abs(this.getMaxPrecision(num))

        //精度非0的数字，转换
        if (precision) {
            return Number(num).toFixed(precision)
        }
        return num.toString()
    }

    /**
     * 获取最大精度
     * @param  {[type]} currentValue [description]
     * @return {[type]}              [description]
     */
    getMaxPrecision(currentValue) {
        const { step } = this.props
        let stepPrecision = this.getPrecision(currentValue)
        //存在step取step的精度，step的值例如0.0001
        if (step)
            stepPrecision = this.getPrecision(step)
        return stepPrecision
    }

    /**
     * 获取精度
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    getPrecision(value) {
        const valueString = value.toString()
        //取e-后字符转换成int,e-10=>10
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 1), 10)
        }

        let precision = 0;
        //取小数点后字符长度0.0001=>4
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1
        }
        //否则0
        return precision
    }


    onChange = (e) => {
        let { value } = e.target

        //去除逗号
        value = value.replace(/\,/g, '')

        const isZero = parseFloat(value) === 0

        //第一个字符是0，第二个不是.去除掉0
        if (value.length > 1 && value.substring(0, 1) == 0 && value.substring(1, 2) != '.' && !isZero) {
            value = value.substring(1)
        }

        if (isZero) {
            this.currentValue = value + ''
            this.setState({ value: value + '' })
            this.state.oldValue != value && this.props.onChange && this.props.onChange(this.toNumber(this.toPrecisionAsStep(value)))
            return
        }

        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
        const { step } = this.props
        //是数字或者是空或者是-
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {

            //最后一个字符是不是. 并且 数字不是-
            if (value.charAt(value.length - 1) !== '.' && value !== '-') {
                value = this.getCurrentValidValue(value)
                if (this.getStep(value) > this.getStep(step)) {
                    value = this.toPrecisionAsStep(value)
                }
                this.setState({ value: value + '' })
                this.state.oldValue != value && this.props.onChange && this.props.onChange(this.toNumber(this.toPrecisionAsStep(value)))
            }
            else {
                this.setState({ value: value + '' })
            }
        }
    }
    getStep(str) {
        let strAfterPoint = (str + '').split('.')[1]
        return strAfterPoint && strAfterPoint.length ? strAfterPoint.length : 0
    }

    onBlur = () => {
        let value = this.state.value

        //最后一个字符是.或者-那么去掉
        if (value && (value.charAt(value.length - 1) === '.' || value === '-')) {
            value = value.slice(0, -1)
            value = this.getCurrentValidValue(value)
            this.setState({ value: value + '' })
            this.state.oldValue != value && this.props.onChange && this.props.onChange(this.toNumber(this.toPrecisionAsStep(value)))
        }

        this.state.oldValue != value && this.props.onBlur && this.props.onBlur(this.toNumber(this.toPrecisionAsStep(value)))
    }

    render() {
        let className = classNames({
            [this.props.className]: !!this.props.className
        })
        var Input = getComponent('antd.Input')
        return (
            <Input
                {...this.props}
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={this.state.value}
                className={className}
            />
        )
    }
} 