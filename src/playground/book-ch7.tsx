
const main = () => {

    interface Horse {
        breed: string
    }
    // mapped types
    type OnlyBoolsAndHorses = {
        [key: string]: boolean | Horse
    }
    const a: OnlyBoolsAndHorses = {
        del: true,
        rodney: false,
        test: {
            breed: "gray horse"
        }
    }

    type OptionsFlags<Type> = {
        [Property in keyof Type]: boolean
    }

    type FeatureFlags = {
        dark: () => void,
        newUser: string
    }

    type FeatureOptions = OptionsFlags<FeatureFlags>;
}

export { main as default };