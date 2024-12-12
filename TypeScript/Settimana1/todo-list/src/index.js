"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var user_1 = require("./user");
var utils_1 = require("./utils");
var todos = [];
var addTodo = function (title, metadata) {
    var todo = {
        id: Date.now(),
        title: title,
        completed: false,
        status: types_1.TodoStatus.Pending
    };
    return todo;
};
todos.push(addTodo("Dark Mode"));
var assignTodoToUser = function (todiId, userId) {
    var todo = todos.find(function (element) { return element.id == todiId; });
    var i = todos.indexOf(todo);
    todos[i].userId = userId;
};
var getUserTodos = function (userId) {
    return todos.filter(function (element) { return element.userId == userId; });
};
var error = function (msg) {
    throw new Error(msg);
};
var parseInput = function (input) {
    if (typeof input == "string")
        return input;
    else if (typeof input == "number")
        return String(input);
    else
        return error;
};
var updateTodo = function (todo, updates) {
    var newtodo = todos.find(function (element) { return element.id == todo.id; });
    var i = todos.indexOf(newtodo);
    todos[i] = __assign(__assign({}, todo), updates);
};
var getToDoSummary = function (todo) {
    var touple = [todo.title, todo.completed];
    return touple;
};
var createProject = function () {
    var project = {
        users: [{ id: 1, name: "Ludovica", email: "ludovicaspinelli@gmail.com" }, { id: 2, name: "Ilaria", email: "ilariamammana@gmail.com" }],
        todos: [{ id: 1, title: "Login", completed: true, userId: 1, status: types_1.TodoStatus.Completed }, { id: 2, title: "Navbar", completed: true, userId: 2, status: types_1.TodoStatus.Completed }, { id: 3, title: "Business Profile", completed: false, status: types_1.TodoStatus.Pending }]
    };
    return project;
};
console.log(todos);
updateTodo(todos[0], { completed: true });
console.log(todos);
var p = createProject();
console.log(p);
var updateTodoStatus = function (todo, status) {
    var todoToUpdate = todos.find(function (element) { return element.id == todo.id; });
    var i = todos.indexOf(todoToUpdate);
    todos[i].status = status;
};
var user1 = new user_1.User(1, "Ludovica", "ludovica@test.com");
var user2 = new user_1.User(2, "Ilaria", "ilaria@test.com");
var user3 = new user_1.User(3, "Gianni", "gianni@test.com");
var to1 = { id: 1, title: "Login", completed: true, userId: 1, status: types_1.TodoStatus.Completed };
user1.addTodo(to1);
/* user1.addTodo({id: 2, title:"Navbar", completed: true, userId: 2, status: TodoStatus.Completed});
user1.addTodo({id: 3, title:"Business Profile", userId: 3, completed: false, status: TodoStatus.Pending}); */
var genericFilter = function (todos) {
    return todos.filter(function (todo) { return todo.completed; });
};
(0, utils_1.filterTodos)(p.todos, genericFilter);
/* const convertArrayToRecord = (todos: ToDo[]) => {
    const recordTodo = todos.map((elem) => {
       return {[elem.id]: elem}
    })
} */
function convertArrayToRecord(todos) {
    return todos.reduce(function (record, todo) {
        record[todo.id] = todo;
        return record;
    }, {});
}
var arr = convertArrayToRecord(p.todos);
console.log(arr);
