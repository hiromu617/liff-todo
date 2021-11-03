import { useUserIdState } from "../contexts/UserIdStateContext";
import { useFetchTodo } from "./useFetchTodo";
import { client } from "../api/axios";
import { Item } from "../types/item.type";

export const useUpdateFinished = () => {
  const { userId } = useUserIdState();
  const { revalidate } = useFetchTodo();

  const updateFinished = async (item: Item) => {
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
  return updateFinished;
};
