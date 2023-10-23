import React from "react";
import {LayoutProps} from "../types";


export function Layout ({children}: LayoutProps) {
    return (
        <div className="flex flex-col h-screen w-screen bg-gray-900 p-20 items-center">
            <h1 className="text-center text-3xl text-gray-100 font-bold uppercase">Todo List</h1>
            {children}
        </div>
    )
}