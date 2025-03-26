"use client"

import React, { useState } from "react"
import Header from "../components/Header"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const TodoList = () => {
    const [userInput, setUserInput] = useState("")
    const [list, setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userInput.trim()) return

        setList([...list, {
            id: Math.random(),
            value: userInput
        }])
        setUserInput("")
    }

    const deleteItem = (id) => {
        setList(list.filter(item => item.id !== id))
    }

    return (
        <div className="max-w-md mx-auto">
            <Header />

            <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
                <Input
                    type="text"
                    placeholder="Add item..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                    ADD
                </button>
            </form>

            {list.length > 0 ? (
                list.map((item) => (
                    <Card key={item.id} className="flex flex-row justify-between items-center gap-4 p-2 border-b last:border-none">
                        <span className="">{item.value}</span>
                        <button
                            onClick={() => deleteItem(item.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                    </Card>
                ))
            ) : (
                <p className="text-center text-gray-500">No items in the list</p>
            )}
        </div>
    )
}

export default TodoList