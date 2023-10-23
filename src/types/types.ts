import React, {Dispatch, SetStateAction} from "react";

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

export enum Status {
    Pending = 'Pending',
    Completed = 'Completed'
}

export interface ListWrapperProps {
    list: TodoItemProps[]
    label: Status
    toggleCheck: (id: string) => void
    deleteTodo: (id: string) => void
}

export interface PreventDeleteModalProps {
    onDelete: () => void
    name: string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
