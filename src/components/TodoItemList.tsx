import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { PlusIcon } from "@heroicons/react/solid";
import { NewTodoModal } from "./NewTodoModal";
import { useTodoItemState } from "../contexts/TodoItemStateContext";
import { useFetchTodo } from "../hooks/useFetchTodo";
import { useFetchUserId } from "../hooks/useFetchUserId";

export const TodoItemList: React.VFC = () => {
  const { finishedItem, notFinishedItem } = useTodoItemState();
  const [isNewTodoModalOpen, setIsNewTodoModalOpen] = useState(false);
  useFetchUserId();
  useFetchTodo();

  return (
    <>
      <NewTodoModal
        isOpen={isNewTodoModalOpen}
        setIsOpen={setIsNewTodoModalOpen}
      />
      <div className="py-20">
        <div className="mb-5 text-center">
          <button
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 w-full border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => setIsNewTodoModalOpen(true)}
          >
            <PlusIcon className="h-5 w-5 text-white " />
            New Todo
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {notFinishedItem.map((item) => (
            <TodoItem item={item} />
          ))}
        </div>
        <div className="bg-blue-400 px-5 py-2 my-5 rounded text-center">
          <h2 className="font-bold text-lg text-white">Finished</h2>
        </div>
        <div className="flex flex-col gap-5">
          {finishedItem.map((item) => (
            <TodoItem item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
