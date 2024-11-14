import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { TodoContext } from "../providers/TodoProvider";


const ToDoList = () => {
    const { data, error, loading, reload } = useContext(TodoContext);
    const [filter, setFilter] = useState("NONE");
    const [search, setSearch] = useState();
    const todo = useFilteredTodos(data, filter, search);
    const inputRef = useRef();

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleInputSearch = (event) => {
        setSearch(event.target.value);
    };

    const valueSearched = useCallback(() => {
        return search;
    }, [search]);

    const handleButtonSearch = (event) => {
        event.preventDefault();
    };

    const filteredData = useMemo(() => {
        return todo;
    }, [todo]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {

    }, [filter, valueSearched()]);

    return (
        <>
            <form>
                <label>Search</label>
                <div>
                    <input type="search" placeholder="Search Mockups, Logos..." required onInput={handleInputSearch} ref={inputRef}/>
                    <button type="submit" onClick={handleButtonSearch}>Search</button>
                </div>
            </form>
            <div>
                <label htmlFor="filterDone">Select an
                    option</label>
                <select id="filterDone" onChange={handleFilter}>
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
        </>
    )
}

export default ToDoList