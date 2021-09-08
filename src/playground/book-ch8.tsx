
const main = () => {

    // template literal types
    type World = "world"
    type Greet = `hello ${World}`

    function a(g: Greet) {
        console.log(g)
    }
    // a("aaa") // error
    a("hello world")

    type Email = "email1" | "email2"
    type Ids = "id1" | "id2"
    type Test = Email | Ids
    type Mindblown = `${Email | Ids}_id`

    function name(param: Mindblown, test: Test) {
        console.log(param, test)
    }
    name("email1_id", "email1")

    type Lang = "en" | "fr" | "pl"
    type TypeExplosion = `${Mindblown}_${Lang}`
}

export { main as default };