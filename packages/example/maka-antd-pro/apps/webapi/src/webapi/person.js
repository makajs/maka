import { fetch } from 'maka'

export default {
    person: {
        findById: (option) => fetch.post('/api/person/findById', option),
        query: (option) => fetch.post('/api/person/query', option),
        del: (option) => fetch.post('/api/person/del', option),
        create: (option) => fetch.post('/api/person/create', option),
        update: (option) => fetch.post('/api/person/update', option),
    }
}