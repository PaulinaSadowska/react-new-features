import { isBuffer } from "util"

const main = () => {
    interface Person {
        name: string,
        surname: string
    }

    interface ReadonlyPerson {
        readonly name: string,
        readonly surname: string
    }


    const a: Person = {
        name: "hello",
        surname: "world"
    }

    const readonlyA: ReadonlyPerson = a

    a.name = "test"
    //readonlyA.surname = "test2"

    console.log("a ->", a)
    console.log("readonlyA ->", readonlyA)

    const readonlyA2: ReadonlyPerson = { ...a }
    console.log("readonlyA2 ->", readonlyA2)

    // index signature
    interface StringArray {
        [index: number]: string
    }

    interface NumberDicrionary {
        [index: string]: number;
        langth: number;
        // name: string; //nope, incompatible type with index
    }

    // intersection types
    interface Colorful {
        color: string
    }

    interface Circle {
        radius: number
    }

    type ColorfulCircle = Colorful & Circle
    const cc: ColorfulCircle = {
        color: "red",
        radius: 6
    }

    interface Box<T> {
        contents: T;
    }

    type orNull<T> = T | null;

    const a1 = "hello"
    const a11 = (param: orNull<string>) => {
        console.log("param", param)
    }
    a11("test")
    a11(null)

    const roArray: readonly number[] = [1, 2, 3, 4, 5]
    //roArray[2] = 9 // nie da sie
    // const arr : Array<number> = roArray // nie da sie

    // tuples
    type TestPair = [string, number]
    const tPair: TestPair = ["1", 1]
    const [t1, t2] = tPair
    console.log("tuples", t1, t2)

    let point = [1, 2] as const;
    function calculate([x, y]: [number, number]) {
        return x * 2 + y * 2
    }
    // calculate(point) // error

    function calculate2([x, y]: readonly [number, number]) {
        return x * 2 + y * 2
    }

    calculate2(point) // ok
}

export { main as default };