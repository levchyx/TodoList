import React, {useState} from "react";
import {Layout, TodoItem, ListWrapper, AddInput, EmptyState} from "./components";
import {TodoItemProps} from "./types";
import { v4 as uuid } from 'uuid';
import {partition} from "lodash";

const defaultTodos: TodoItemProps[] = [
    {id: uuid(), name: "Morning routine", checked: false},
    {id: uuid(), name: "Drink coffee", checked: false},
    {id: uuid(), name: "Daily meeting", checked: false},
]

const savedTodosKey = 'saved-todos'

function saveTodos(todos: TodoItemProps[]) {
    localStorage.setItem(savedTodosKey, JSON.stringify(todos))
}

function getSavedTodos(initialValue: TodoItemProps[]) {
    const saved = localStorage.getItem(savedTodosKey)
    return saved ? JSON.parse(saved) : initialValue
}

function App() {
    const [todos, setTodos] = useState<TodoItemProps[]>(getSavedTodos(defaultTodos))

    function addTodo(name: string) {
        const newTodo =  {id: uuid(), name, checked: false}
        setTodos(prevState => [
            newTodo,
            ...prevState
        ])
        saveTodos([newTodo, ...todos])
    }

    function toggleCheck(id: string) {
        const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
        saveTodos(updatedTodos)
        setTodos(updatedTodos)
    }

    function deleteTodo(id: string) {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        saveTodos(updatedTodos)
        setTodos(updatedTodos)
    }

    const [pending, completed] = partition(todos, todo => !todo.checked)

    return (
        <Layout>
            <ListWrapper>
                <AddInput onAdd={addTodo}/>
                {!todos.length ? <EmptyState/> :
                    <div className="flex flex-col space-y-2">
                        {pending.length > 0 && (
                            <>
                                <span className="font-bold text-xs text-yellow-700">Pending</span>
                                {pending.map((todo) => (
                                    <TodoItem {...todo} toggleCheck={toggleCheck} deleteTodo={deleteTodo} key={todo.id}/>
                                ))}
                            </>

                        )}
                        {completed.length > 0 && (
                            <>
                                <span className="font-bold text-xs text-green-700">Completed</span>
                                {completed.map((todo) => (
                                    <TodoItem {...todo} toggleCheck={toggleCheck} deleteTodo={deleteTodo} key={todo.id}/>
                                ))}
                            </>

                        )}
                    </div>}
            </ListWrapper>
        </Layout>
    );
}

export default App;
