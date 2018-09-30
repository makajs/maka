class componentFactory {
    constructor() {
        this.components = {}
        this.appComponents = {}
    }

    registerComponent(name, component) {
        if (this.components[name]) {
            console.log(`Component already exists. name: ${name},please ignore!`)
            return
        }
        this.components[name] = component
    }

    /*
    registerAppComponent(appName, componentName, component) {
        this.appComponents[appName] = this.appComponents[appName] || {}
        this.appComponents[appName].components = this.appComponents[appName].components || {}
        if (this.appComponents[appName].components[componentName])
            throw `existed. app:${appName}, name: ${componentName}`
        this.appComponents[appName].components[componentName] = component
    }*/

    registerComponents(components) {
        if (!components || components.length == 0)
            return
        components.forEach(c => this.registerComponent(c.name, c.component))
    }

    getComponent(name) {
        if (!name)
            throw 'component name can not null'

        /*
        if (name.substring(0, 2) == '::') {
            if(name.substr(2))
                return  name.substr(2) 
            else
                throw `No components. name: ::`
        }*/

        const nameSegs = name.split('.'),
            firstSeg = nameSegs[0]

        /*
        if (this.appComponents && this.appComponents[appName] && this.appComponents[appName].components && this.appComponents[appName].components[firstSeg]) {
            var com = this.appComponents[appName].components[name]

            if (com && nameSegs.length > 1) {
                com = this.findChild(com, nameSegs)
            }

            if (com) return com

        }*/

        var component = this.components[firstSeg]

        if (component && nameSegs.length > 1) {
            component = this.findChild(component, nameSegs)
        }

        if (!component) {
            return name
            //throw `No components. name: ${name}`
        }

        return component
    }

    findChild(component, nameSegs) {
        for (let s of nameSegs.slice(1)) {
            if (!component[s]) {
                component = undefined
                return
            }

            component = component[s]
        }
        return component
    }
}

const instance = new componentFactory()

export default instance