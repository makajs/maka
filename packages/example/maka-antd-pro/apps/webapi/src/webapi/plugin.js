import { fetch } from 'maka'

export default {
    plugin: {
        query: (option) => fetch.post('/api/plugin/query', option),
        install: (option) => fetch.post('/api/plugin/install', option),
        uninstall: (option) => fetch.post('/api/plugin/uninstall', option)
    }
}