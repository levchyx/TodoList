import React, {useState} from "react";
import {Layout, Container, AddInput, EmptyState, ListWrapper} from "./components";
import {Status, TodoItemProps} from "./types";
import { v4 as uuid } from 'uuid';
import {partition} from "lodash";
import {getSavedTodos, saveTodos} from "./utils";

const defaultTodos: TodoItemProps[] = [
    {id: uuid(), name: "Morning routine", checked: false},
    {id: uuid(), name: "Drink coffee", checked: false},
    {id: uuid(), name: "Daily meeting", checked: false},
]


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
            <Container>
                <AddInput onAdd={addTodo}/>
                {!todos.length
                    ? <EmptyState/>
                    : <div className="flex flex-col space-y-2">
                        {pending.length > 0 && <ListWrapper label={Status.Pending} list={pending} deleteTodo={deleteTodo} toggleCheck={toggleCheck}/>}
                        {completed.length > 0 && <ListWrapper label={Status.Completed} list={completed} deleteTodo={deleteTodo} toggleCheck={toggleCheck}/>}
                    </div>
                }
            </Container>
        </Layout>
    );
}

export default App;
