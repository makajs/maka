import { fetch } from 'maka'

export default {
    bom: {
        findById: (option) => fetch.post('/api/bom/findById', option),
        query: (option) => fetch.post('/api/bom/query', option),
        del: (option) => fetch.post('/api/bom/del', option),
        prev: (option) => fetch.post('/api/bom/prev', option),
        next: (option) => fetch.post('/api/bom/next', option),
        create: (option) => fetch.post('/api/bom/create', option),
        update: (option) => fetch.post('/api/bom/update', option),
    }
}