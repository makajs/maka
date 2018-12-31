const cache = {}

function fixPath (path){
    if(!path) return path

    var p = path
    if(cache[p]){
        return cache[p]
    }

    var ret = []
    path.split('.').reduce((a,b)=> { 
        if(a)
            return ret.push(`${a}.${b}`) && `${a}.${b}`
        else
            return ret.push(`${b}`) && `${b}`
    }, '' )
    
    cache[p] = ret.join(' && ')
    return cache[p]
}

export default {
    fixPath
}