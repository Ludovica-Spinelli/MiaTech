import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername] = useState("l.Spinelli");
    const [password, setPassword] = useState("12345");

    const alertCredential = () => {
        alert(`${username} ${password}`);
    }

    return (
        <>
            <form action="">
                <button onClick={alertCredential}>Submit</button>
            </form>
        </>
    )
}

export default LoginForm