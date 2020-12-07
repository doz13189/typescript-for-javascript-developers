export {}

class Person {
    public name: string
    private age: number
    protected natinality: string

    constructor(name: string, age: number, natinality: string) {
        this.name = name
        this.age = age
        this.natinality = natinality
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`
    }
}

class Android extends Person {
    constructor (name: string, age: number, natinality: string) {
        super(name, age, natinality)
    }

    profile(): string {
        // return `name: ${this.name}, age: ${this.age}, natinality: ${this.natinality}`
        return `name: ${this.name}, natinality: ${this.natinality}`
    }
}
let taro = new Person('taro', 8, 'japan')
// let hanako = new Person()

console.log(taro.name)
console.log(taro.profile())



