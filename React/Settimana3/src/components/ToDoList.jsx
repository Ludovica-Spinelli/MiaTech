import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";


const ToDoList = () => {
    const { data, error, loading, reload } = useFetch("https://jsonplaceholder.typicode.com/todos");
    const [filter, setFilter] = useState("NONE");
    const todo = useFilteredTodos(data, filter);

    const heandleFilter = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {       
        
    }, [filter]);

    return (
        <>
            <div>
                <label htmlFor="filterDone">Select an
                    option</label>
                <select id="filterDone" onChange={heandleFilter}>
                    <option value="NONE">None</option>
                    <option value="DONE">Completed</option>
                    <option value="NOT_DONE">Not Completed</option>
                </select>
            </div>
            <ul> Todo List:
                {
                    loading && <p>Loading...</p>
                }
                {
                    error && <p>{error}</p>
                }
                {
                    todo && todo.map((item) => {
                        return <li key={item.id}>{item.userId} {item.id} {item.title} {item.completed.toString()}</li>

                    })
                }
            </ul>
            {/* <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.completed}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table> */}
        </>
    )
}

export default ToDoList