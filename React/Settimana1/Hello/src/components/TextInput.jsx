import { useState } from "react"

const TextInput = () => {
    const [input, setInput] = useState("");

    const handleInput = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    return (
        <>
            <input type="text" name="campo" onInput={handleInput}/>
        </>
    )
}

export default TextInput