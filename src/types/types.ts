import React, {Dispatch, SetStateAction} from "react";

export interface LayoutProps {
    children: React.ReactNode
}

export interface TodoItemProps {
    id: string
    name: string
    checked: boolean
    favourite: boolean
}

export interface TodoProps {
    id: string
    name: string
    checked: boolean
    favourite: boolean
    toggleFavourite: (id: string) => void
    toggleCheck: (id: string) => void
    deleteTodo: (id: string) => void
    setLastFav: Dispatch<SetStateAction<string>>
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
    toggleFavourite: (id: string) => void
    deleteTodo: (id: string) => void
    setLastFav: Dispatch<SetStateAction<string>>

}

export interface PreventDeleteModalProps {
    onDelete: () => void
    name: string
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
