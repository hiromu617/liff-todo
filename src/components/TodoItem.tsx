import React, { useState } from "react";
import { Item } from "../types/item.type";
import { CheckIcon } from "@heroicons/react/solid";
import { TodoDetailModal } from "./TodoDetailModal";
import { client } from "../api/axios";
import { useFetchTodo } from "../hooks/useFetchTodo";
import { useUserIdState } from "../contexts/UserIdStateContext";

export type TodoItemProps = {
  item: Item;
};

export const TodoItem: React.VFC<TodoItemProps> = ({ item }) => {
  const { revalidate } = useFetchTodo();
  const [isTodoDetailModalOpen, setIsTodoDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useUserIdState();

  const toggleFinished = async () => {
    setIsLoading(true);
    try {
      const res = await client.put(`/item/${item.id}`, {
        finished: !item.finished,
        user_id: userId,
      });
      console.log(res.data);
      revalidate();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <TodoDetailModal
        TodoItem={item}
        isOpen={isTodoDetailModalOpen}
        setIsOpen={setIsTodoDetailModalOpen}
      />
      <div className="flex gap-5 justify-start items-center bg-white p-5 rounded-lg shadow-md">
        <button onClick={() => toggleFinished()} disabled={isLoading}>
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
