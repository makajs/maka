import { fetch } from 'maka'

export default {
    technic: {
        queryAll: (option) => fetch.post('/api/technic/queryAll', option),
        detail: {
            queryAll: (option) => fetch.post('/api/technic/detail/queryAll', option),
        }
    }
}