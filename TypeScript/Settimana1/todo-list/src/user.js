"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    return User;
}());
exports.User = User;
