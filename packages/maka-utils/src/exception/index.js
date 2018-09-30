const exceptions = []

export function error(err){
    console.error(err)
    exceptions.unshift(err)
}

export function clear(){
    exceptions.splice(0, exceptions.length)
}

export function getExceptions(){
    return exceptions
}


export default {
   error,
   clear,
   getExceptions
}