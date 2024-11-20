import Navbar from './components/Navbar.jsx'
import PublicLayout from './Layouts/PublicLayout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from "react-router-dom"
import SingleElement from './pages/SingleElement.jsx'
import TodoProvider from './providers/TodoProvider.jsx'

function App() {

  return (
    <>
      <TodoProvider>
        <Routes>
          <Route path='/' element={<PublicLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo/:id" element={<SingleElement />} />
          </Route>
        </Routes>
      </TodoProvider>
    </>
  )
}

export default App
