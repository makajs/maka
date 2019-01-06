import React, { Component } from 'react'
import { getComponent } from 'maka'

export default class SelectComponent extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            dataSource: []
        }
    }

    focusHandler = async () => {
        if (this.props.onLoadOption) {
            var ret = await this.props.onLoadOption()
            this.setState({ dataSource: (ret || []) })
        }
        this.props.onFocus && this.props.onFocus()
    }


    blurHandler = () => {
        this.setState({ dataSource: [] })
        this.props.onBlur && this.props.onBlur()
    }

    changeHandler = (v) => {
        var r = (v === 0 || v) ? v : '', obj,
            idField = this.props.idField || 'id',
            displayField = this.props.displayField || 'name',
            value = this.props.value


        if (this.state.dataSource) {
            if (this.props.mode === 'multiple') {
                obj = []
                if (r instanceof Array) {
                    r.forEach(o => {
                        let hit = this.state.dataSource.find(x => x[idField] == o || x[displayField] == o)
                        if (!hit && value && value instanceof Array) {
                            hit = value.find(x => x[idField] == o || x[displayField] == o)
                        }
                        if (hit && obj.findIndex(y => y[idField] === hit[idField]) == -1)
                            obj.push(hit)
                    })
                }
            }
            else {
                obj = this.state.dataSource.find(o => o[idField] === r)
            }
        }
        this.props.onChange && this.props.onChange(obj)
    }

    searchHandler = async (v) => {
        if (this.props.onLoadOption) {
            var ret = await this.props.onLoadOption(v)
            this.setState({ dataSource: (ret || []) })
        }
        this.props.onSearch && this.props.onSearch()
    }

    render() {
        let {
            notFoundContent, 
            optionLabelProp,
            mode,
            idField = 'id',
            codeField,
            displayField = 'name',
            displayGetter,
            filterGetter,
            titleGetter,
            ...other
        } = this.props

        notFoundContent = notFoundContent || '无匹配结果'
        var val

        titleGetter = titleGetter || displayGetter
        filterGetter = filterGetter || displayGetter
        if (mode === 'multiple' && this.props.value instanceof Array) {
            if (titleGetter) {
                val = this.props.value.map(o => titleGetter(o))
            }
            else {
                val = this.props.value.map(o => o[displayField])
            }

        }
        else {
            if (this.state.dataSource && this.state.dataSource.length > 0 && this.props.value) {
                val = this.props.value[idField]
            } else {
                if (titleGetter) {
                    val = this.props.value && titleGetter(this.props.value)
                }
                else {
                    val = this.props.value && this.props.value[displayField]
                }
            }
        }
        const Select = getComponent('antd.Select')
        return (
            <Select

                {...other}
                mode={mode}
                optionLabelProp='title'
                optionFilterProp='filter'
                notFoundContent={notFoundContent}
                onFocus={this.focusHandler}
                onBlur={this.blurHandler}
                onChange={this.changeHandler}
                onSearch={this.searchHandler}
                value={val}
            >
                {
                    this.state.dataSource.map(o => (
                        <Select.Option
                            key={o[idField]}
                            value={o[idField]}
                            title={titleGetter ? titleGetter(o) : o[displayField]}
                            filter={filterGetter ? filterGetter(o) : o[displayField]}
                        >
                            {displayGetter ? displayGetter(o) : o[displayField]}
                        </Select.Option>
                    ))
                }

            </Select>
        )
    }
}