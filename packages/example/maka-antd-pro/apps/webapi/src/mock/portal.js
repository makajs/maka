import { fetch } from 'maka'

const mockData = fetch.mockData

fetch.mock('/api/portal/getMenu', (option) => {
    var installedApp = mockData.apps.filter(o => o.isInstalled === true)
    var menus
    if (installedApp && installedApp.length > 0){
        menus = [
            ...mockData.menus,
            {
                icon: 'ellipsis',
                locale: 'menu.appstore',
                children: [...installedApp]
            }
        ]
    }
    else {
        menus = mockData.menus
    }
    return { result: true, value: menus }
})
