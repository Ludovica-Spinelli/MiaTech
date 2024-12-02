import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { TodoContext } from "../providers/TodoProvider";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, update } from "../store/slices/todoSlice";

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
    const dispatch = useDispatch();
/*     const { data, error, loading, reload } = useContext(TodoContext); */
    const todos = useSelector((state) => state.todo.todos);
    const [filter, setFilter] = useState("NONE");
    const [search, setSearch] = useState();
    const [dataView, setDataView] = useState();
    const inputRef = useRef();
    const [query, setQuery] = useSearchParams();

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const filteredTodo = useMemo(() => {
        return filterLogic[filter](dataView);
    }, [filter]);

    const filterData = () => {
        setDataView(filteredTodo ? filteredTodo : todos);
    }

    const handleInputSearch = (event) => {
        setSearch(event.target.value);
        setQuery({search: event.target.value});
        console.log(query.get('search'));
    };

    const searchData = useCallback(() => {
        if(search) setDataView(searchLogic(todos, search));
    }, [search]);

    const handleButtonSearch = (event) => {
        event.preventDefault();
    };

    const handleComplete = (id) => {
        dispatch(completeTodo(id));
      }

    useEffect(() => {
        async function getTodos() {
          try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await res.json();
            dispatch(update(data));
          } catch (error) {
            console.error(error);
          }
        }
        getTodos();
        inputRef.current.focus();
      }, []);

    useEffect(() => {
        /* filterData();
        searchData();
        setDataView(todos); */

    }, [todos, filter, search]);

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
                    /* data.loading && <p>Loading...</p> */
                }
                {
                    /* data.error && <p>{data.error}</p> */
                }
                {
                    todos && todos.map((item) => {
                        return <li key={item.id}>{item.userId} {item.id} {item.title} {item.completed.toString()} 
                                    <button><Link to={`/todo/${item.id}`}>View</Link></button> 
                                    {!item.completed && <button onClick={() => handleComplete(item.id)}>Completed</button>}
                                </li>

                    })
                }
            </ul>
        </>
    )
}

export default ToDoList