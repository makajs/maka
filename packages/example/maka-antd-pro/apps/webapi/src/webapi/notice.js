import { fetch } from 'maka'

export default {
    notice: {
        query: (option) => fetch.post('/api/notice/query', option),
    }
}