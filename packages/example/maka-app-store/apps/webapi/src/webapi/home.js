import { fetch } from 'maka'

export default {
    home: {
        todo: (option) => fetch.post('/api/home/todo', option),
        chart: (option) => fetch.post('/api/home/chart', option),
    }
}