import pkgJson from './package.json'
import { actionMixin, registerAction, fetch } from 'maka'
import './style.less'

const name = pkgJson.name

registerAction('webapi', {
    login: (option) => fetch.post('/api/user/login', option),
    article: {
        query: (option) => fetch.post('/api/article/query', option),
        findById: (option) => fetch.post('/api/article/findById', option),
        create: (option) => fetch.post('/api/article/create', option),
        update: (option) => fetch.post('/api/article/update', option),
        del: (option) => fetch.post('/api/article/del', option),
    },
    portal: {
        init: (option) => fetch.post('/api/portal/init', option),
    }
}, true)


const state = {
    data: {
    }
}

@actionMixin('base', 'webapi')
class action {
    constructor(option) {
        Object.assign(this, option.mixins)
    }

    btnClick = async () => {
        await this.webapi.login({ account: '13334445556', password: 'c4ca4238a0b923820dcc509a6f75849b' })
        for (var i = 1; i < 2000; i++) {
            await this.webapi.article.create({ title: `title${i}`, content: 'description descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription' })
        }

    }
}

const view = {
    component: 'div',
    className: 'webapi',
    children: [{
        component: 'button',
        children: 'webapi',
        onClick: '{{$btnClick}}'
    }]
}

export {
    name,
    state,
    action,
    view
}