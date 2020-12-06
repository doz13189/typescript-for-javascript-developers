
export {}

function error(message: string): never {
    throw new Error(message)
}

let result = error('file not found')
