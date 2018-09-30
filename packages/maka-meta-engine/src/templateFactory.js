class templateFactory {
    constructor() {
        this.templates = {}
    }

    registerTemplate(name, templateHandler) {
        if (this.templates[name]) {
            console.log(`Template already exists. name: ${name},please ignore!`)
            return
        }
        this.templates[name] = templateHandler
    }

    registerTemplates(templates) {
        if (!templates || templates.length == 0)
            return
        templates.forEach(t => this.registerTemplate(t.name, t.templateHandler))
    }

    getTemplate(name) {
        if (!name)
            throw 'template name can not null'
        const nameSegs = name.split('.'),
            firstSeg = nameSegs[0]

        var template = this.templates[firstSeg]
        if (template && nameSegs.length > 1) {
            template = this.findChild(template, nameSegs)
        }
        return template
    }

    findChild(template, nameSegs) {
        for (let s of nameSegs.slice(1)) {
            if (!template[s]) {
                template = undefined
                return
            }

            template = template[s]
        }
        return template
    }
}

const instance = new templateFactory()

export default instance