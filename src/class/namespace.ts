
export {}

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

const me = new Japanese.Osaka.Person('ham')
console.log(me.name)

const michael = new English.Person('michael', 'joseph', 'jackson')
console.log(michael.firstName)


