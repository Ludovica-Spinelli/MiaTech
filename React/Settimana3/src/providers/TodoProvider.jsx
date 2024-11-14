import { createContext, useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch";

export const TodoContext = createContext(null);

const TodoProvider = ({children}) => {
  const { data, error, loading, reload } = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <TodoContext.Provider value={{data, error, loading, reload}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider