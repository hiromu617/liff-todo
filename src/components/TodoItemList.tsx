import React from "react"
import { Item } from "../types/item.type"
import {TodoItem} from "./TodoItem"

export type TodoItemListProps = {
  items: Item[]
}

export const TodoItemList: React.VFC<TodoItemListProps> = ({items}) => {
  return (
    <div className="py-20 flex flex-col gap-5">
    {items.map((item) => <TodoItem item={item} />)}
    </div>
  )
}
