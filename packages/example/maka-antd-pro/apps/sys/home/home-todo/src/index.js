import pkgJson from '../package.json'
import { actionMixin, fetch, load } from 'maka'
import './style.less'

const name = pkgJson.name

const state = {
    data: {
        todos: []
    }
}

@actionMixin('base', 'moment', 'tableHelper', 'webapi')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    onInit = async () => {
        var resp = await this.webapi.home.todo({})
        this.base.ss({ 'data.todos': resp })
    }
}

const view = {
    component: 'div',
    className: 'home-todo',
    children: [{
        component: 'tpl.Table',
        bindPath: 'data.todos',
        enablePagination: false,
        columns: [
            { type: 'sequence' },
            { type: 'text', title: '代办内容', bindField: 'description', flexGrow: 1 },
            {
                type: 'text', title: '日期', bindField: 'date', width: 200, align: 'center',
                value: `{{{
                    var v = data.todos[row.rowIndex].date
                    if(!v) return 
                    return $moment(v).format('YYYY-MM-DD')
                }}}`
            },
        ]
    }]
}

async function beforeRegister() {
    await load(['template', 'webapi'])
}


export {
    name,
    state,
    action,
    view,
    beforeRegister
}