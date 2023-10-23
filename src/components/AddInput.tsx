import {AddInputProps} from "../types";
import {useState} from "react";
import clsx from "clsx";
import React from "react";


export function AddInput ({onAdd}: AddInputProps) {
    const [name, setName] = useState<string>('')
    function addTodo () {
        onAdd(name.trim())
        setName('')
    }
    return (
        <div className="flex w-full flex-col !mb-4 space-y-4 items-center">
            <input value={name} type="text" placeholder="Add new todo" className="p-2 w-full rounded-md border text-sm border-gray-900" required onChange={(event) => setName(event.target.value)}/>
            <button
                disabled={!name.trim()}
                className={clsx("inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200", {
                    'cursor-not-allowed': !name.trim()
                })}
                onClick={addTodo}
            >
                + Add todo
            </button>
        </div>
    )
}