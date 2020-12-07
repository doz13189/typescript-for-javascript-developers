
export {}

class Me {
    static isProgrammer: boolean = true
    static firstName: string = 'a'
    static lastName: string = 'b'

    static work() {
        // return 'hey, gurs are you interested in typescript ?'
        return `hey, this is ${this.firstName}, gurs are you interested in typescript ?`
    }
}
// let me = new Me()
// console.log(me.isProgrammer)

console.log(Me.isProgrammer)
console.log(Me.work())
