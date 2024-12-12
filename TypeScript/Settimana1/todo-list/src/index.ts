import { ToDo, TodoRecord, TodoStatus } from "./types";
import { UserType } from "./types";
import { ToDoWithMetadata } from "./types";
import { Project } from "./types";
import { User } from "./user";
import { filterTodos } from "./utils";

let todos:ToDo[] = [];

const addTodo = (title: string, metadata?: (string | object)) => {
    const todo:ToDo = {
        id: Date.now(),
        title: title,
        completed: false,
        status: TodoStatus.Pending
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
    const i = todos.indexOf(newtodo);
    todos[i] = {...todo, ...updates};
}

const getToDoSummary = (todo: ToDo) => {
    const touple: [string, boolean] = [todo.title, todo.completed];
    return touple;
}

const createProject = () => {
    const project: Project = {
        users: [{id: 1, name:"Ludovica", email:"ludovicaspinelli@gmail.com"}, {id: 2, name:"Ilaria", email:"ilariamammana@gmail.com"}],
        todos: [{id: 1, title:"Login", completed:true, userId: 1, status: TodoStatus.Completed}, {id: 2, title:"Navbar", completed: true, userId: 2, status: TodoStatus.Completed}, {id: 3, title:"Business Profile", completed: false, status: TodoStatus.Pending}]
    }
    return project;
}

console.log(todos);
updateTodo(todos[0], {completed: true});
console.log(todos);
const p = createProject();
console.log(p);

const updateTodoStatus = (todo: ToDo, status: TodoStatus) => {
    let todoToUpdate = todos.find((element) => element.id == todo.id);
    const i = todos.indexOf(todoToUpdate);
    todos[i].status = status;
}

const user1 = new User(1, "Ludovica", "ludovica@test.com");
const user2 = new User(2, "Ilaria", "ilaria@test.com");
const user3 = new User(3, "Gianni", "gianni@test.com");

const to1: ToDo = {id: 1, title:"Login", completed:true, userId: 1, status: TodoStatus.Completed}

user1.addTodo({id: 1, title:"Login", completed:true, userId: 1, status: TodoStatus.Completed});
user1.addTodo({id: 2, title:"Navbar", completed: true, userId: 2, status: TodoStatus.Completed});
user1.addTodo({id: 3, title:"Business Profile", userId: 3, completed: false, status: TodoStatus.Pending});

const genericFilter = (todos: ToDo[]) => {
    return todos.filter((todo) => todo.completed);
}

filterTodos(p.todos, genericFilter);

function convertArrayToRecord(todos: ToDo[]): TodoRecord {
    return todos.reduce<TodoRecord>((record, todo) => {
        record[todo.id] = todo;
        return record
    }, {})
};

const arr = convertArrayToRecord(p.todos);
console.log(arr);