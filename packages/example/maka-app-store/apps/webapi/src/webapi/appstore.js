import { fetch } from 'maka'

export default {
    appstore: {
        query: (option) => fetch.post('/api/appstore/query', option),
        install: (option) => fetch.post('/api/appstore/install', option),
        uninstall: (option) => fetch.post('/api/appstore/uninstall', option)
    }
}