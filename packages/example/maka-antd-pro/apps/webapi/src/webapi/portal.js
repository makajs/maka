import { fetch } from 'maka'

export default {
    portal: {
        getMenu: (option) => fetch.post('/api/portal/getMenu', option)
    }
}