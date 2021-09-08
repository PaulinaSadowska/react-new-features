
const main = () => {
    function identity<Type>(param: Type): Type {
        return param
    }

    const a: number = identity(1234)
    const b: string = identity("123")

    const myIndentity: <Type>(arg: Type) => Type = identity
    const myIndentity2: { <Type>(arg: Type): Type } = identity

    interface GenericInterface<Type> {
        (arg: Type): Type
    }

    const myIndentity3: GenericInterface<number> = identity
    myIndentity2("aa")
    myIndentity2(123)
    myIndentity3(123)

    function loggingIdentity<Type extends { length: number }>(param: Type): Type {
        console.log("length", param.length)
        return param
    }

    loggingIdentity("test")

    // type parameters in generic constraints
    function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
        return obj[key]
    }

    const x = { a: 1, b: 2, c: 3, d: 4 }
    x["a"]
    // x["e"] // error, noice

}

export { main as default };