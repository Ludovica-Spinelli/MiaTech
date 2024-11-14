import ToDoList from './components/ToDoList'
import TodoProvider from './providers/TodoProvider.jsx'

function App() {

  return (
    <>
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
    </>
  )
}

export default App
