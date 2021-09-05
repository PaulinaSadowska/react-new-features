export { }

const names = ["a", "b"]
names.forEach((name) => {
    console.log(name.toUpperCase());
})

names.forEach(function (name) {
    console.log(name.toUpperCase());
})

const printCoord = (pt: { x?: number, y: number, label?: string }) => {
    const z = (pt.x || 0) + pt.y
    console.log(`${pt.label?.toLocaleUpperCase()} x: ${pt.x} ; y: ${pt.y} ; z ${z}`)
}

printCoord({ x: 1, y: 2 })
printCoord({ y: 2 })
// printCoord({ x: 1 }) // error

// union types
const unionTypes = (id: string | number) => {
    console.log(`id is ${id}`)
    if (typeof id === "number") {
        const incremented = id + 1
    } else {
        const upper = id.toUpperCase()
    }
}

unionTypes("test")
unionTypes(1234)

// type alias
type Point = {
    x: number,
    y: number
}

const printCoord2 = (pt: Point) => {
    console.log(`x: ${pt.x} ; y: ${pt.y}`)
}

printCoord2({ x: 1, y: 3 })

type TestString = string

const test = (a: TestString) => {
    a.toUpperCase()
}

// interface
interface Point2 {
    x: number,
    y: number
}

interface NewPoint extends Point2 {
    z: number
}

const printCoord3 = (pt: NewPoint) => {
    console.log(`x: ${pt.x} ; y: ${pt.y} ; z: ${pt.z}`)
}