import { fetch } from 'maka'

export default {
    department: {
        queryAll: (option) => fetch.post('/api/department/queryAll', option),
    }
}