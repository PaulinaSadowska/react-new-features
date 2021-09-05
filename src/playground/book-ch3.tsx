import { NoteData } from "../components/Note"

const functionAsParam = (fn: (a: string) => void) => {
    fn("test")
}

const main = () => {

    type A = (test: number) => {
        description: string
    }

    const testA = (a: A) => {
        console.log("resultA", a(2))
    }

    testA((test: number) => {
        console.log("test", test)
        return {
            description: "testDescA"
        }
    })

    type B = {
        description: string;
    }

    const testB = (b: B) => {
        console.log("resultB", b)
    }

    testB({
        description: "testDescB"
    })

    type C = {
        description: string;
        (someArg: number): boolean;
    }

    const testC = (c: C) => {
        console.log("resultB", c(5))
    }

    const myFn = (someArg: number) => {
        return someArg > 5;
    };
    myFn.description = 'checks if arg is greater than 5';

    testC(myFn)

    // constructors
    type SomeConstructor = {
        new(title: string): NoteData;
        (someArg: number): boolean;
    }

    // generics

    function firstElement<Type>(array: Type[]) {
        return array[0]
    }

    console.log(firstElement(["a", "b"]).toUpperCase())
    console.log(firstElement([1, 2]) + 1)

    function longest<Type extends { length: number }>(a: Type, b: Type) {
        if (a.length > b.length) {
            return a;
        } else {
            return b;
        }
    }

    function minLength<Type extends { length: number }>(a: Type, min: number): Type {
        if (a.length > min) {
            return a;
        } else {
            // return { length: min }; // nope
            return a
        }
    }

    console.log("minLength", minLength("test", 6))

    function combine<Type>(a: Type[], b: Type[]) {
        return a.concat(b)
    }

    // const result = combine(["a", "b"], [1, 2]) // error
    const result = combine<string | number>(["a", "b"], [1, 2]) // no error

    // optional params
    function a(b?: string) {
        console.log("a(b) -> " + b)
    }

    function c(params = 99) {
        console.log("c(params) -> " + params)
    }


    a("test")
    a()
    a(undefined)
    c(1111)
    c()
    c(undefined)

    function a1(b: string): string; // overload signature
    function a1(b: string, c: number, d: number): string; // overload signature
    function a1(b: string, c?: number, d?: number): string { // cannot be called directly
        if (c !== undefined && d != undefined) {
            return b + "!!!" + (c + 1 + d)
        }
        return b + "!!!"
    }

    a1("23")
    //  a1("1212", 11) // nope
    a1("23", 11, 11)

    // rest
    function multiply(x: number, ...y: number[]) {
        return y.map((yi) => x * yi)
    }

    const res = multiply(5, 1, 2, 3, 4, 5, 6)
    console.log(res.length, res)

    const arr = [1, 2] as const;
    const angle = Math.atan2(...arr)
}

export { main as default };