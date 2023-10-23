import {TodoItemProps} from "../types";

const savedTodosKey = 'saved-todos'

export function saveTodos(todos: TodoItemProps[]) {
    localStorage.setItem(savedTodosKey, JSON.stringify(todos))
}

export function getSavedTodos(initialValue: TodoItemProps[]) {
    const saved = localStorage.getItem(savedTodosKey)
    return saved ? JSON.parse(saved) : initialValue
}
