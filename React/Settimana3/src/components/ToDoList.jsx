import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { TodoContext } from "../providers/TodoProvider";
import { Link, useSearchParams } from "react-router-dom";

const filterLogic = {
    DONE: (data) => {
        return data.filter(item => item.completed);
    },
    NOT_DONE: (data) => {
        return data.filter(item => !item.completed);
    },
    NONE: (data) => {
        return data;
    }
};

const searchLogic = (data, word) => {
    return data.filter(item => item.title.match(new RegExp(word, "ig")));
};

const ToDoList = () => {
    const { data, error, loading, reload } = useContext(TodoContext);
    const [filter, setFilter] = useState("NONE");
    const [search, setSearch] = useState();
    const [todo, setTodo] = useState(data);
    const inputRef = useRef();
    const [query, setQuery] = useSearchParams();

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const filteredTodo = useMemo(() => {
        return filterLogic[filter](todo);
    }, [filter]);

    const filterData = () => {
        setTodo(filteredTodo ? filteredTodo : data);
    }

    const handleInputSearch = (event) => {
        setSearch(event.target.value);
        setQuery({search: event.target.value});
        console.log(query.get('search'));
    };

    const searchData = useCallback(() => {
        if(search) setTodo(searchLogic(data, search));
    }, [search]);

    const handleButtonSearch = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        filterData();
        searchData();
    }, [data, filter, search]);

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
                        return <li key={item.id}>{item.userId} {item.id} {item.title} {item.completed.toString()} 
                                    <button><Link to={`/todo/${item.id}`}>View</Link></button> 
                                </li>

                    })
                }
            </ul>
        </>
    )
}

export default ToDoList