import React from 'react'
import pkgJson from '../package.json'
import { actionMixin, registerComponent } from 'maka'
import FixedDataTable from 'maka-fixed-data-table'
import FDT from './wrapper'

import './style.less'

const name = pkgJson.name

registerComponent('FixedDataTable', FixedDataTable)
registerComponent('FDT', FDT)

const state = {
    data: {
        list: [{
            name: 'name1',
            description: 'description1'
        }, {
            name: 'name2',
            description: 'description2'
        }]
    }
}

@actionMixin('base')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }
}

const view = {
    component: 'div',
    children: [{
        component: 'FixedDataTable.Table',
        rowHeight: 50,
        headerHeight: 50,
        rowsCount: '{{data.list.length}}',
        width: 1000,
        height: 300,
        children: [{
            component: 'FixedDataTable.Column',
            columnKey: 'name',
            header: {
                component: 'FixedDataTable.Cell',
                children: 'Name'
            },
            cell: {
                _function: '(row)',
                component: 'FixedDataTable.Cell',
                children: '{{ data.list[row.rowIndex].name}}'
            },
            width: 100
        }, {
            component: 'FixedDataTable.Column',
            columnKey: 'descrption',
            header: {
                component: 'FixedDataTable.Cell',
                children: 'Descrption'
            },
            cell: {
                _function: '(row)',
                component: 'FixedDataTable.Cell',
                children: '{{data.list[row.rowIndex].description}}'
            },
            width: 100
        }]
    }, {
        component: 'div',
        style: { width: 1000, height: 300 },
        children: {
            component: 'FDT.Table',
            rowHeight: 50,
            headerHeight: 50,
            rowsCount: '{{data.list.length}}',
            width: 1000,
            height: 500,
            columns: [{
                component: 'FDT.Column',
                columnKey: 'name',
                header: {
                    component: 'FDT.Cell',
                    children: 'Name'
                },
                cell: {
                    _function: '(row)',
                    component: 'FDT.Cell',
                    children: '{{data.list[row.rowIndex].name}}'
                },
                width: 100
            }, {
                component: 'FDT.Column',
                columnKey: 'description',
                flexGrow: 1,
                header: {
                    component: 'FDT.Cell',
                    children: 'Description'
                },
                cell: {
                    _function: '(row)',
                    component: 'FDT.Cell',
                    
                    children: {
                        component: 'input',
                        value: '{{data.list[row.rowIndex].description}}',
                    }
                },
                width: 100
            }]
        }
    }]

}

export {
    name,
    view,
    state,
    action
}