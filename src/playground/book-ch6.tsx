
const main = () => {

    type Point = { x: number, y: number }
    type P = keyof Point

    type Mapish = { [k: string]: boolean }
    type M = keyof Mapish
    const a: M = "11"
    const b: M = 1111

    const n = typeof a;
    console.log("n", n) //  string

    // indexed access types
    type Person = {
        age: number,
        name: string,
        alive: boolean
    }
    type Age = Person["age"]

    function logAge(age: Age) {
        console.log("age: " + age)
    }
    logAge(1)

    type I1 = Person[keyof Person]
    function logIt(it: I1) {
        console.log("it: " + it)
    }
    logIt("aa")
    logIt(true)

    const MyArray = [
        { name: "Alice", age: 15 },
        { name: "Bob", age: 16 }
    ];
    type Person2 = typeof MyArray[number]
    type Age2 = typeof MyArray[number]["age"]

    // conditional types
    interface IdLabel {
        id: number
    }

    interface NameLabel {
        name: string
    }

    type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;


    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
        throw "unimplemented"
    }

    const a1: NameLabel = createLabel("a")
    const a2: IdLabel = createLabel(2)
    const a3: NameLabel | IdLabel = createLabel(Math.random() ? "hello" : 2)

    type MessageOf<T extends { message: unknown }> = T["message"]
    interface Email {
        message: string
    }
    type EmailMessage = MessageOf<Email>;

    type Flatten<T> = T extends any[] ? T[number] : T
    type Flatten2<T> = T extends Array<infer Item> ? Item : T;

    type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never;
    type Num = GetReturnType<() => number>;
}

export { main as default };