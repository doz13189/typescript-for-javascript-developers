
export {}

let bmi: (height: number, weight: number, printable?: boolean) => number = (
        height: number, weight: number, printable?: boolean
    ):number => {
        const bmi: number = weight / (height * height)
        if (printable) {
            console.log('bmi', bmi)
        }
        return bmi
    }
bmi(1.78, 198)
bmi(1.78, 198, true)
bmi(1.78, 198, false)


