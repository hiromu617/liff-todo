import React from "react";
import { Item } from "../types/item.type";
import { TodoItem } from "./TodoItem";
import { PlusIcon } from "@heroicons/react/solid";

export type TodoItemListProps = {
  items: Item[];
};

export const TodoItemList: React.VFC<TodoItemListProps> = ({ items }) => {
  const finishedItem = items.filter((item) => item.finished);
  const notYetFinishedItem = items.filter((item) => !item.finished);

  return (
    <div className="py-20">
      <div className="mb-5 text-center">
        <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 w-full border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <PlusIcon className="h-5 w-5 text-white " />
          New Todo
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {notYetFinishedItem.map((item) => (
          <TodoItem item={item} />
        ))}
      </div>
      <div className="bg-blue-400 px-5 py-2 my-5 rounded">
        <h2 className="text-xl font-semibold text-white">Finished</h2>
      </div>
      <div className="flex flex-col gap-5">
        {finishedItem.map((item) => (
          <TodoItem item={item} />
        ))}
      </div>
    </div>
  );
};
