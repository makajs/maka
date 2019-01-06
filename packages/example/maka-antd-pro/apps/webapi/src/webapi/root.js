import { fetch } from 'maka'

export default {
    signIn:  (option) => fetch.post('/api/signIn', option),
    signOut:  (option) => fetch.post('/api/signOut', option),
}