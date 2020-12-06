
export {}

const reducer = (v1: number, v2: number): number => {
    console.log(v1, v2)
    return v1 + v2
}

const sum: (
        ...values: number[]
    ) => number = (
        ...values: number[]
    ): number => {
        // console.log(values)
        return values.reduce(reducer)
    }

const result = sum(1, 2, 3, 4, 5);
console.log(result)

// [1, 2, 3, 4].reduce(reducer);

