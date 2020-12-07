
export {}

type Profile = {
    name: string,
    age: number
}

const me: Profile = {
    name: 'ham',
    age: 43
}

me.age ++

console.log(me)

type PersonalDataType = Readonly<Profile>
const friend: PersonalDataType = {
    name: 'shige',
    age: 55
}

type Yomitori<T> = { readonly [P in keyof T]: T[P] }
type YomitoriProfile = Yomitori<Profile>

