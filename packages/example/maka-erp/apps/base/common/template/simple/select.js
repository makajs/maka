import helper from '../helper'

const { fixPath } = helper

//{component:'tpl.Select', bindPath: 'data.form.aa', onLoadOption:'{{$loadOption}}' }
export default function select(option) {
    var { bindPath, component, loadOptions,  ...ext } = option

    return {
        component: 'ctrl.Select',
        showSearch: true,
        dropdownStyle: { maxHeight: 400, overflow: 'auto' },
        notFoundContent: ' ',
        allowClear: true,
        value: `{{${fixPath(bindPath)}}}`,
        onChange: `{{(v)=>$base.setState({'${bindPath}': v })}}`,
        ...ext
        /*
        component: 'RS.Async',
        classNamePrefix:"react-select",
        isSearchable: true,
        isClearable: true,
        cacheOptions: true,
        defaultOptions: true,
        loadOptions: loadOptions || onLoadOption,
        value: `{{${fixPath(bindPath)}}}`,
        menuIsOpen: true,
        isMulti: true,
        onChange: `{{(v)=>$base.setState({'${bindPath}': v })}}`,
        theme: (theme) => {
            return {
                ...theme,
                borderRadius: 2,
                colors: {
                    ...theme.colors,
                    //primary: '#40a9ff',
                    //primary: '#d1e9ff',
                    //primary25: '#e6f7ff'
                },

                spacing: {
                    ...theme.spacing,
                    controlHeight: 18
                }
            }
        },
        ...ext*/
    }
}
