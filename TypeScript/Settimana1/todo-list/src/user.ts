import { ToDo } from "./types";

export class User {
    id: number;
    name: string;
    email: string | undefined;
    todos: ToDo[] | undefined;

    constructor(id: number, name: string, email:string | undefined) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    addTodo (todo: ToDo) {
        this.todos.push(todo);
    }
}