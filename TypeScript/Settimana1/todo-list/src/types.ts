export interface ToDo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
}

export interface User {
    id: number,
    name: string,
    email?: string
}

export interface ToDoWithMetadata extends ToDo {
    metadata?: any
}