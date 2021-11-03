import React, { useState } from "react";
import { Item } from "../types/item.type";
import { CheckIcon } from "@heroicons/react/solid";
import { TodoDetailModal } from "./TodoDetailModal";
import { useUpdateFinished } from "../hooks/useUpdateFinished";

export type TodoItemProps = {
  item: Item;
};

export const TodoItem: React.VFC<TodoItemProps> = ({ item }) => {
  const [isTodoDetailModalOpen, setIsTodoDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const updateFinished = useUpdateFinished();

  const handleUpdateFinished = async () => {
    setIsLoading(true);
    await updateFinished(item);
  };

  return (
    <>
      <TodoDetailModal
        TodoItem={item}
        isOpen={isTodoDetailModalOpen}
        setIsOpen={setIsTodoDetailModalOpen}
      />
      <div className="flex gap-5 justify-start items-center bg-white p-5 rounded-lg shadow-md">
        <button onClick={() => handleUpdateFinished()} disabled={isLoading}>
          <CheckIcon
            className={`h-6 w-6 ${
              item.finished
                ? "text-blue-500"
                : "text-blue-100 hover:text-blue-300"
            }`}
          />
        </button>
        <label
          onClick={() => setIsTodoDetailModalOpen(true)}
          className="font-semibold text-lg underline flex-1"
        >
          {item.title}
        </label>
      </div>
    </>
  );
};
