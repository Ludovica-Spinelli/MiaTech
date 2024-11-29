import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {loading: false, todos: []}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialAuthState,
    reducers: {
        update(state, action){
            state.todos = action.payload
        },
        completeTodo(state, action){
            const todo = state.todos.find(item => item.id === action.payload)
            const index = state.todos.indexOf(todo)
            todo.completed = true
            state.todos[index] = todo
        }
    }
});

export const { update,  completeTodo} = todoSlice.actions;

export default todoSlice.reducer;