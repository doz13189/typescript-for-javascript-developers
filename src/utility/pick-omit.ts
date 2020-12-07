
export {}

type DetailedProfile = {
    name: string,
    height: number,
    weight: number
}

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>
type SmallProfile = Omit<DetailedProfile, 'name'>

type MyOmit = Pick<
    DetailedProfile,
    'height'
>;
type MySmallProfile = MyOmit


