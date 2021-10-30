import React from "react"
import { Item } from "../types/item.type"

export type TodoItemProps = {
  item: Item
}

export const TodoItem: React.VFC<TodoItemProps> = ({item}) => {
  return (
    <div className="flex gap-5 justify-start items-center bg-white p-5 rounded-lg shadow-md">
      <button>{item.finished ? "close" : "open"}</button>
      <label className="font-semibold text-lg">{item.title}</label>
    </div>
  )
}
