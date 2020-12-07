export {}

class Animal {
    constructor(public name: string) {}
    run() {
        return 'i can run'
    }
}

class Lion extends Animal {
    public speed: number

    constructor(public name: string, speed: number) {
        super(name)
        this.speed = speed
    }

    run(): string {
        const parentMessage = super.run()
        console.log('parentMessage', parentMessage)
        return `${super.run()} ${this.speed}km/h`
    }
}

let dog = new Animal('pochi')
console.log(dog.run())

let lion = new Lion('leo', 80)
console.log(lion.run())


