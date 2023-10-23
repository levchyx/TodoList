import React from "react";

export interface LayoutProps {
    children: React.ReactNode
}

export interface TodoItemProps {
    id: string
    name: string
    checked: boolean
}

export interface TodoProps {
    id: string
    name: string
    checked: boolean
    toggleCheck: (id: string) => void
    deleteTodo: (id: string) => void
}

export interface AddInputProps {
    onAdd: (name: string) => void
}