import { fetch, getAction } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/signOut', () => {
    fetch.clearAccessToken()
    return { result: true, value: true }
})


fetch.mock('/api/signIn', (option) => {
    var i18n = getAction('i18n')

    const user = mockData.users.find(o => o.account == option.account && o.password == option.password)

    if (user) {
        return {
            result: true,
            //token模拟简单处理，正式不应该有密码等数据
            token: `${user.id},${user.account},${user.password},${user.name ? user.name : ''}`,
            value: option
        }
    }
    else {
        return {
            result: false, error: {
                message: i18n('webapi.sign-in.invalid-credentials')
            }
        }
    }
})
