import { ToDo } from "./types";

type genericFn<T> = (todos: ToDo[], func: (todos: ToDo[]) => ToDo[]) => T

export const filterTodos: genericFn<ToDo[]> = (todos: ToDo[], func: (todos: ToDo[]) => ToDo[]) => {
    return func(todos);
}


