import { fetch } from 'maka'

export default {
    option: {
        query: (option) => fetch.post('/api/option/query', option),
        update: (option) => fetch.post('/api/option/update', option)
    }
}