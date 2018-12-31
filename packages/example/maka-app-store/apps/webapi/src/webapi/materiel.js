import { fetch } from 'maka'

export default {
    materiel: {
        queryAll: (option) => fetch.post('/api/materiel/queryAll', option),
    }
}