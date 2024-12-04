import { ToDo } from "./types";

let todos:ToDo[] = [];

const addTodo = (title: string, metadata?: any) => {
    const todo:ToDo = {
        id: Date.now(),
        title: title,
        completed: false,
         
    };

    return todo;
}

todos.push(addTodo("Dark Mode"));

const assignTodoToUser = (todiId: number, userId: number) => {
    const todo = todos.find((element) => element.id == todiId);
    const i = todos.indexOf(todo);
    todos[i].userId = userId;
}

const getUserTodos = (userId: number) => {
    return todos.filter((element) => element.userId == userId);
}

const error = (msg: string): never => {
    throw new Error(msg);
}

const parseInput = (input: unknown) => {
    if (typeof input == "string") return input
    else if (typeof input == "number") return String(input)
    else return error
}