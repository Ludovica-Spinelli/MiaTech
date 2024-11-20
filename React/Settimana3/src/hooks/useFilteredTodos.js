import { useEffect, useState } from "react"

/* const filterLogic = {
    DONE: (data) => {
        return data.filter(item => item.completed);
    },
    NOT_DONE: (data) => {
        return data.filter(item => !item.completed);
    },
    NONE: (data) => {
        return data;
    }
}; */

const searchLogic = (data, word) => {
    return data.filter(item => item.title.match(new RegExp(word, "ig")));
};

export const useFilteredTodos = (data, word = "") => {
    const [todo, setTodo] = useState(data);

   /*  const filterData = () => {
        setTodo(filterLogic[filter](data));
    } */

    const searchData = () => {
        if(word) setTodo(searchLogic(data, word));
    }

    useEffect(() => {
/*         filterData(); */
        searchData();
    }, [data, word]);

    if(data) return (todo);
}