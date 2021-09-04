import React, { useState, useEffect } from 'react';

export const CalculatorApp = (props) => {

    const [count, setCount] = useState(props.initialValue)
    const [text, setText] = useState("")

    const decrement = () => setCount(count - 1)

    const increment = () => setCount(count + 1)

    useEffect(() => {
        console.log("useEffect ran")
        document.title = count
    }, [count])

    return (
        <div>
            <p>the current {text || "count"} is {count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => setCount(0)}>reset</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}