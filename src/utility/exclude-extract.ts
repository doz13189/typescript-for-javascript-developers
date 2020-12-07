export {}

type MyExclude<T> = T extends string ? never : T

type DebugType = () => void
type SomeTypes = string | number | DebugType
type FunctionType = MyExclude<SomeTypes>




// type NonFunctionType = Exclude<SomeTypes, DebugType>
// type TypeExcludingFunction = Exclude<SomeTypes, Function>

// type FunctionTypeByExtract = Extract<SomeTypes, DebugType>
// type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>
// type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>

// type NullableTypes = string | number | null
// type exNonNullableTypes = NonNullable<NullableTypes>



