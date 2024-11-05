import { useRef } from "react"

const UncontrolledInput = () => {
    const inputRef = useRef("Ciao");

    const showValue = () => {
        alert(inputRef.current);
    }

    return (
        <>
            <input type="text" value={inputRef.current}/>
            <button onClick={showValue}>Value</button>
        </>
    )
}

export default UncontrolledInput