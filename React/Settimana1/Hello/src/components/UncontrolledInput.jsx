import { useRef } from "react"

const UncontrolledInput = () => {
    const inputRef = useRef();

    const showValue = () => {
        alert(inputRef.current.value);
    }

    return (
        <>
            <input type="text" ref={inputRef}/>
            <button onClick={showValue}>Value</button>
        </>
    )
}

export default UncontrolledInput