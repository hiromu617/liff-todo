import { useUserIdState } from "../contexts/UserIdStateContext";
import { useFetchTodo } from "./useFetchTodo";
import { client } from "../api/axios";

export const useDeleteTodoItem = () => {
  const { userId } = useUserIdState();
  const { revalidate } = useFetchTodo();

  const deleteTodoItem = async (TodoItemId: number) => {
    try {
      const res = await client.post(`/item/${TodoItemId}/delete`, {
        user_id: userId,
      });
      console.log(res.data);
      revalidate();
    } catch (e) {
      console.error(e);
    }
  };

  return deleteTodoItem;
};
