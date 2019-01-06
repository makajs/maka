import { fetch } from 'maka'

export default {
    customer: {
        findById: (option) => fetch.post('/api/customer/findById', option),
        query: (option) => fetch.post('/api/customer/query', option),
        del: (option) => fetch.post('/api/customer/del', option),
        prev: (option) => fetch.post('/api/customer/prev', option),
        next: (option) => fetch.post('/api/customer/next', option),
        create: (option) => fetch.post('/api/customer/create', option),
        update: (option) => fetch.post('/api/customer/update', option),
        group: {
            findById: (option) => fetch.post('/api/customer/group/findById', option),
            queryAll: (option) => fetch.post('/api/customer/group/queryAll', option),
            del: (option) => fetch.post('/api/customer/group/del', option),
            create: (option) => fetch.post('/api/customer/group/create', option),
            update: (option) => fetch.post('/api/customer/group/update', option),
        }
    }
}