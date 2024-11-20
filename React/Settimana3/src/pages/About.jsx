import { useState } from "react"
import { Navigate } from "react-router-dom"


const About = () => {
  const [navigate, setNavigate] = useState(false);

  if(navigate) return <Navigate to="/" />

  const handleButton = () => {
    setNavigate(true);
  }

  return (
    <>
      <div>About</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure tempora accusantium totam ea? Assumenda quisquam porro nemo! Repellat accusantium quasi molestiae itaque fuga debitis doloribus ipsa omnis, maxime non.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure tempora accusantium totam ea? Assumenda quisquam porro nemo! Repellat accusantium quasi molestiae itaque fuga debitis doloribus ipsa omnis, maxime non.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure tempora accusantium totam ea? Assumenda quisquam porro nemo! Repellat accusantium quasi molestiae itaque fuga debitis doloribus ipsa omnis, maxime non.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure tempora accusantium totam ea? Assumenda quisquam porro nemo! Repellat accusantium quasi molestiae itaque fuga debitis doloribus ipsa omnis, maxime non.</p>
      <button onClick={handleButton}>Home</button>
    </>
  )
}

export default About