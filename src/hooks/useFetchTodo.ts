import { useEffect } from "react";
import { useSetTodoItemState } from "../contexts/TodoItemStateContext";
import { client } from "../api/axios";
import { Item } from "../types/item.type";

export const useFetchTodo = () => {
  const setTodoItem = useSetTodoItemState();

  // マウント時にデータを取得
  useEffect(() => {
    fetchItems();
  }, [setTodoItem]);

  const fetchItems = async () => {
    try {
      const res = await client.get("/item");
      console.log(res.data);
      const TodoItems: Item[] = res.data;
      setTodoItem({
        finishedItem: TodoItems.filter((item: Item) => item.finished),
        notFinishedItem: TodoItems.filter((item: Item) => !item.finished),
      });
    } catch (e) {
      console.error(e);
    }
  };

  // データを再取得する
  return { revalidate: fetchItems } as const;
};
