import pkgJson from '../package.json'
import { load, actionMixin, registerAction } from 'maka'
import './i18n'
import initMockData from './mock'
import webapi from './webapi'
import './style.less'

const name = pkgJson.name

registerAction('webapi', webapi, true)


const state = {
    data: {
    }
}

@actionMixin('base', 'webapi')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    test = async () => {
        var option = await this.webapi.option.query({})
        alert(JSON.stringify(option))
    }
}

const view = {
    component: 'div',
    children: [{
        component: 'button',
        children: 'test',
        onClick: '{{$test}}'
    }]
}


async function beforeRegister() {
    await load(['template'])
}

async function afterRegister() {
    initMockData()
}


export {
    name,
    state,
    action,
    view,
    beforeRegister,
    afterRegister
}