import { useUserIdState } from "../contexts/UserIdStateContext";
import { useFetchTodo } from "./useFetchTodo";
import { client } from "../api/axios";

export const useUpdateTodoItem = () => {
  const { userId } = useUserIdState();
  const { revalidate } = useFetchTodo();

  const updateTodoItem = async (
    formData: {
      title: string;
      description: string;
    },
    TodoItemId: number
  ) => {
    try {
      const res = await client.put(`/item/${TodoItemId}`, {
        title: formData.title,
        description: formData.description,
        user_id: userId,
      });
      console.log(res.data);

      // データを再取得
      revalidate();
    } catch (e) {
      console.error(e);
    }
  };

  return updateTodoItem;
};
