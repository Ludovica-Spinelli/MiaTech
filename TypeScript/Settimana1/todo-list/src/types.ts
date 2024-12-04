export interface ToDo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
}

export interface User {
    id: number,
    name: string,
    email?: string,
    readonly todos?: readonly [ToDo]
}

export interface ToDoWithMetadata extends ToDo {
    metadata?: any
}

export interface Project {
    users: User[],
    todos: ToDo[]
}