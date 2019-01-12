export default {
    data: {
        drawerOpen: false,
        themes: [{
            key: 'dark',
            img: 'theme-style-dark.svg',
            locale: 'app.setting.pagestyle.dark',
        }, {
            key: 'light',
            img: 'theme-style-light.svg',
            locale: 'app.setting.pagestyle.light',
        }],
        primaryColors: [{
            key: 'geekblue',
            color: 'rgb(24, 144, 255)',
            appName: 'theme-primary-color-blue'
        }, {
            key: 'green',
            color: 'rgb(19, 194, 194)',
            appName: 'theme-primary-color-green'
        }, {
            key: 'dust',
            color: 'rgb(245, 34, 45)',
            appName: 'theme-primary-color-red'
        }],
        navModes:[{
            key: 'sidermenu',
            img: 'nav-sidermenu.svg',
            locale: 'app.setting.sidemenu',
        }, {
            key: 'topmenu',
            img: 'nav-topmenu.svg',
            locale: 'app.setting.topmenu',
        }],
        setting: {}
    }
}