
export {}

let name: any = 'ham'
let length1 = (name as string).length
let length2 = name.length as number
let length3 = (<string>name).length


