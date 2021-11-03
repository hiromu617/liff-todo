import { useUserIdState } from "../contexts/UserIdStateContext";
import { useFetchTodo } from "./useFetchTodo";
import { client } from "../api/axios";

export const useCreateTodoItem = () => {
  const { userId } = useUserIdState();
  const { revalidate } = useFetchTodo();

  const createTodoItem = async (formData: {
    title: string;
    description: string;
  }) => {
    try {
      const res = await client.post("/item", {
        title: formData.title,
        description: formData.description,
        user_id: userId,
      });
      console.log(res.data);
      revalidate();
    } catch (e) {
      console.error(e);
    } 
  };

  return createTodoItem;
};
