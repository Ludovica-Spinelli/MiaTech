import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState(`${count}`)

    const addCount = () => {
        setCount((prev) => prev + 1);
    }

    const dectementCount = () => {
        setCount((prev) => prev -1);
    }

    const resetCount = () => {
        setCount(0);
    }

    useEffect(() => {
        setTitle(`${count}`)
    }, [count])

    return (
        <>
            <h1>Il contatore è {title}</h1>
            <p>Count: {count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={dectementCount}>-</button>
        </>
    )
}

export default Counter;