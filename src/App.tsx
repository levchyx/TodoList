import React, {useCallback, useState} from "react";
import {Layout, Container, AddInput, EmptyState, ListWrapper} from "./components";
import {Status, TodoItemProps} from "./types";
import { v4 as uuid } from 'uuid';
import {partition} from "lodash";
import {getSavedTodos, saveTodos} from "./utils";

const defaultTodos: TodoItemProps[] = [
    {id: uuid(), name: "Morning routine", checked: false, favourite: false},
    {id: uuid(), name: "Drink coffee", checked: false, favourite: false},
    {id: uuid(), name: "Daily meeting", checked: false, favourite: false},
]

function App() {
    const [todos, setTodos] = useState<TodoItemProps[]>(getSavedTodos(defaultTodos))
    const [lastFavId, setLastFavId] = useState<string>('')

    const addTodo = useCallback((name: string) => {
        const newTodo =  {id: uuid(), name, checked: false, favourite: false}
        setTodos(prevState => [
            newTodo,
            ...prevState
        ])
        saveTodos([newTodo, ...todos])
    }, [todos])

    const toggleCheck = useCallback((id: string) => {
        const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, checked: !todo.checked} : todo)
        saveTodos(updatedTodos)
        setTodos(updatedTodos)
    }, [todos])

    //Last in first out example
    //If user select more than 3 items than last selected status becomes false and passes to selected item

    const toggleFavourite = useCallback((id: string) => {
        const updated = todos.map((todo) => ({...todo, favourite:  todo.id === id ? !todo.favourite : todo.favourite}))
        const favourites = updated.filter((todo) => todo.favourite)
        const updatedWithChangedFav = updated.map((todo) => ({...todo, favourite: todo.id === lastFavId ? false : todo.favourite}))
        const updatedTodos= favourites.length > 3 ? updatedWithChangedFav : updated
        saveTodos(updatedTodos)
        setTodos(updatedTodos)
    }, [todos, lastFavId])

    const deleteTodo = useCallback((id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        saveTodos(updatedTodos)
        setTodos(updatedTodos)
    }, [todos])

    const [pending, completed] = partition(todos, todo => !todo.checked)

    return (
        <Layout>
            <Container>
                <AddInput onAdd={addTodo}/>
                {!todos.length
                    ? <EmptyState/>
                    : <div className="flex flex-col space-y-2">
                        {pending.length > 0 &&
                            <ListWrapper
                                label={Status.Pending}
                                list={pending}
                                deleteTodo={deleteTodo}
                                toggleCheck={toggleCheck}
                                toggleFavourite={toggleFavourite}
                                setLastFav={setLastFavId}
                            />}
                        {completed.length > 0 &&
                            <ListWrapper
                                label={Status.Completed}
                                list={completed}
                                deleteTodo={deleteTodo}
                                toggleCheck={toggleCheck}
                                toggleFavourite={toggleFavourite}
                                setLastFav={setLastFavId}
                            />}
                    </div>
                }
            </Container>
        </Layout>
    );
}

export default App;
