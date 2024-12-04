import { ToDo } from "./types";
import { User } from "./types";
import { ToDoWithMetadata } from "./types";
import { Project } from "./types";

let todos:ToDo[] = [];

const addTodo = (title: string, metadata?: (string | object)) => {
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

const updateTodo = (todo: ToDo, updates: Partial<ToDo>) => {
    let newtodo = todos.find((element) => element.id == todo.id);
    const i = todos.indexOf(todo);
    todos[i] = {...todo, ...updates};
}

const getToDoSummary = (todo: ToDo) => {
    const touple: [string, boolean] = [todo.title, todo.completed];
    return touple;
}

const createProject = () => {
    const project: Project = {
        users: [{id: 1, name:"Ludovica", email:"ludovicaspinelli@gmail.com"}, {id: 2, name:"Ilaria", email:"ilariamammana@gmail.com"}],
        todos: [{id: 1, title:"Login", completed:true, userId: 1}, {id: 2, title:"Navbar", completed: true, userId: 2}, {id: 3, title:"Business Profile", completed: false}]
    }
    return project;
}

console.log(todos);
updateTodo(todos[0], {completed: true});
console.log(todos);
const p = createProject();
console.log(p);