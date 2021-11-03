import { useEffect } from "react";
import { useSetTodoItemState } from "../contexts/TodoItemStateContext";
import { client } from "../api/axios";
import { Item } from "../types/item.type";
import { useUserIdState } from "../contexts/UserIdStateContext";

export const useFetchTodo = () => {
  const setTodoItem = useSetTodoItemState();
  const { userId } = useUserIdState();

  // マウント時にデータを取得
  useEffect(() => {
    if (!userId) return;
    fetchItems(userId);
    // eslint-disable-next-line
  }, [setTodoItem, userId]);

  const fetchItems = async (user_id: string) => {
    try {
      const res = await client.get(`/item/${user_id}`);
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

  const revalidate = () => {
    if (!userId) return;
    fetchItems(userId);
  };

  // データを再取得する
  return { revalidate: revalidate } as const;
};
