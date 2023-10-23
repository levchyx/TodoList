import React from "react";
import {MagnifyingGlassCircleIcon} from "@heroicons/react/20/solid";

export function EmptyState() {
    return (
        <div className="flex flex-col items-center w-full space-y-2">
            <MagnifyingGlassCircleIcon className="h-12 w-12 text-gray-800"/>
            <span className="text-xs font-semibold text-gray-800">There is nothing to show</span>
        </div>
    )
}