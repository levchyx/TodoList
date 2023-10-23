import {TodoProps} from "../types";
import {CheckIcon, TrashIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, {useState} from "react";
import {PreventDeleteModal} from "./PreventDeleteModal";


export function TodoItem ({id, name, checked, toggleCheck, deleteTodo}: TodoProps) {
    const [openDelete, setOpenDelete] = useState<boolean>(false)
    return (
        <>
            <div className="flex space-x-2 justify-between rounded-md items-center p-2 bg-white">
                <div className="flex items-center space-x-2">
                    <button
                        className={clsx('flex items-center transition-all duration-150 justify-center p-1 border border-gray-500 rounded', {
                            'bg-blue-600 hover:bg-blue-700': checked,
                            'hover:bg-gray-200': !checked
                        })}
                        onClick={() => toggleCheck(id)}
                    >
                        {checked ? <CheckIcon className="h-4 w-4 text-white"/> : <span className="h-4 w-4"/>}
                    </button>
                    <div className="text-gray-800 text-sm font-semibold">
                        {name}
                    </div>
                </div>
                <button onClick={() => setOpenDelete(true)}>
                    <TrashIcon className="h-5 w-5 text-red-600 transition-all duration-150 hover:text-red-500"/>
                </button>
            </div>
            <PreventDeleteModal
                name={name}
                isOpen={openDelete}
                setIsOpen={setOpenDelete}
                onDelete={() => deleteTodo(id)}
            />
        </>

    )
}
