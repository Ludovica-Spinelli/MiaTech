import { useEffect, useState } from "react"

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

export const useFilteredTodos = (data, filter) => {
    const [todo, setTodo] = useState(data);

    console.log(data);

    const filterData = () => {
        setTodo(filterLogic[filter](data));
    }

    useEffect(() => {
        filterData();
    }, [filter]);

    if(data) return (todo);
}