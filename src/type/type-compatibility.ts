
export {}
let foo: any
let bar: string = 'type'

console.log(typeof foo)
foo = bar
console.log(typeof foo)

// let bar: number = 1
let fooString: string
let barString: string = 'string'

fooString = barString

let fooStringLiteral: 'foo' = 'foo'
fooString = fooStringLiteral

let fooNumber: number
let fooNumberLiteral: 1999 = 1999
fooNumber = fooNumberLiteral

interface Animal {
    age: number,
    name: string
}

class Person {
    constructor(public age: number, public name: string) {}
}
let me: Animal
me = new Person(53, 'a')

