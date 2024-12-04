"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos = [];
var addTodo = function (title, metadata) {
    var todo = {
        id: Date.now(),
        title: title,
        completed: false,
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
