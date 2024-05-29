import { createContext, useState } from 'react'
import itemsData from '../Data/itemsData.json'

export const TaskContext = createContext()

export function TaskContext({ children }) {
    const [taskItems, setTaskItems] = useState([])

    function AddToTasks(itemId) {
        const item = itemsData.find((item) => item.id === itemId)
        setTaskItems((prev) => [...prev, item])
    }

    const contextValue = (taskItems, AddToTasks);

    return (
        <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
    )
}