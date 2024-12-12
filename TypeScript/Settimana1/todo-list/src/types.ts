export enum TodoStatus {
    Pending,
    InProgress,
    Completed
}

export interface ToDo {
    id: number,
    title: string,
    completed: boolean,
    userId?: number,
    status: TodoStatus
}

export interface UserType {
    id: number,
    name: string,
    email?: string,
    readonly todos?: readonly [ToDo]
}

export interface ToDoWithMetadata extends ToDo {
    metadata?: any
}

export interface Project {
    users: UserType[],
    todos: ToDo[]
}

type PartialTodo<T, U, X, Y, Z> = {
    [P in keyof ToDo]? : ToDo[P];
}

export type TodoRecord = Record<number, ToDo> 