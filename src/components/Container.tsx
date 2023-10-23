import React from "react";
import {LayoutProps} from "../types";

export function Container ({children}: LayoutProps) {
    return (
        <div className="flex flex-col max-w-sm w-full mt-8 p-4 bg-gray-400 rounded-md space-y-2">
            {children}
        </div>
    )
}