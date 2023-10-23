import {AddInputProps} from "../types";
import {useState} from "react";
import clsx from "clsx";
import React from "react";


export function AddInput ({onAdd}: AddInputProps) {
    const [name, setName] = useState<string>('')
    function addTodo () {
        onAdd(name)
        setName('')
    }
    return (
        <div className="flex w-full flex-col !mb-4 space-y-2 items-center">
            <input value={name} type="text" placeholder="Add new todo" className="p-2 w-full rounded-md border text-sm border-gray-900" required onChange={(event) => setName(event.target.value)}/>
            <button
                disabled={!name.trim()}
                className={clsx("px-2 py-1 text-white text-sm rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-200", {
                    'cursor-not-allowed': !name.trim()
                })}
                onClick={addTodo}
            >
                + add todo
            </button>
        </div>
    )
}