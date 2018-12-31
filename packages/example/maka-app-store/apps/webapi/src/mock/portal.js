import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/portal/getMenu', (option) => {
    var menus = mockData.apps.filter(o => o.isInstalled === true)
    return { result: true, value: menus }
})
