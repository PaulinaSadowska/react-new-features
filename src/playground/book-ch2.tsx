

type A = {
    a: string
}
type B = {
    b: number
}

function isA(param: A | B): param is A {
    return (param as A).a !== undefined
}

function isB(param: A | B): param is B {
    return (param as B).b !== undefined
}

export const test = () => {
    test2({ a: "test", b: 2 })
    test2({ a: "test2" })
    test2({ b: 666 })
}

const test2 = (a: A | B) => {
    if (isA(a)) {
        console.log(a.a)
    } else {
        console.log(a.b)
    }
}

export { };