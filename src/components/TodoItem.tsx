import React, { useState } from "react";
import { Item } from "../types/item.type";
import { CheckIcon } from "@heroicons/react/solid";
import { TodoDetailModal } from "./TodoDetailModal";

export type TodoItemProps = {
  item: Item;
};

export const TodoItem: React.VFC<TodoItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TodoDetailModal TodoItem={item} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex gap-5 justify-start items-center bg-white p-5 rounded-lg shadow-md">
        <button>
          <CheckIcon
            className={`h-6 w-6 ${
              item.finished
                ? "text-blue-500"
                : "text-blue-100 hover:text-blue-300"
            }`}
          />
        </button>
        <label
          onClick={() => setIsOpen(true)}
          className="font-semibold text-lg hover:underline"
        >
          {item.title}
        </label>
      </div>
    </>
  );
};
