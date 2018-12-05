import React from 'react'
import { actionMixin, registerComponent, setHoc } from 'maka'
import pkgJson from './package.json'
import * as RS from 'react-select/lib';
import './style.less'

console.log(RS)

const name = pkgJson.name


registerComponent('RS', RS)
const colorOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];



const state = { data: {} }

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
    filterColors = (inputValue) => {
        if (inputValue) {
            return colorOptions.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
            )
        }
        return colorOptions;
    }

    promiseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(this.filterColors(inputValue));
            }, 1000);
        });

    changeHandler = e => {
        debugger
    }
}


const view = {
    component: 'div',
    children: [{
        component: 'RS.default',
        className: "basic-single",
        classNamePrefix: "select",
        defaultValue: colorOptions[0],
        isSearchable: true,
        isClearable: true,
        name: "color",
        options: colorOptions
    }, {
        component: 'RS.Async',
        cacheOptions: true,
        defaultOptions: true,
        loadOptions: '{{$promiseOptions}}',
        onChange:'{{$changeHandler}}'
    }]
}

export {
    name,
    view,
    state,
    action
}