import {ListWrapperProps, Status} from "../types";
import {TodoItem} from "./TodoItem";
import React from "react";
import clsx from "clsx";

export function ListWrapper({label, list, toggleCheck, deleteTodo}: ListWrapperProps) {
    return (
        <>
            <span className={clsx("font-bold text-xs text-green-700", {
                '!text-yellow-700': label === Status.Pending
            })}>
                {label}
            </span>
            {list.map((todo) => (
                <TodoItem {...todo} toggleCheck={toggleCheck} deleteTodo={deleteTodo} key={todo.id}/>
            ))}
        </>
    )
}