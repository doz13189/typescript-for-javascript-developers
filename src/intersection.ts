
export {}

type Pither1 = {
    throwingSpeed: number
}

type Batter1 = {
    battingAverage: number
}

const DaimajinSasaki: Pither1 = {
    throwingSpeed: 154
}

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
}


// type TwoWayPlayer = {
//     throwingSpeed: number,
//     battingAverage: number
// }

type TwoWayPlayer = Pither1 & Batter1

const OtaniShohei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
}

