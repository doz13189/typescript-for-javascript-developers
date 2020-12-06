
const kans = (): number => 43
let numberAny: any = kans()
let numberUnknown: unknown = kans()

let sumAny = numberAny + 10
console.log(typeof numberUnknown)
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10
}

