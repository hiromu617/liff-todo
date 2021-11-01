import { client, requestResults } from "./axios";

export const AxiosItems = {
  get: () => {
    return requestResults(client.get("/item"));
  },
  post: (id: number, params: { title: string; description: string }) => {
    return requestResults(
      client.post(`/item/${id}`, {
        params,
      })
    );
  },
  put: (
    id: number,
    params: { title: string; description: string; finished: boolean }
  ) => {
    return requestResults(
      client.put(`/item/${id}`, {
        params,
      })
    );
  },
  delete: (id: number) => {
    return requestResults(client.delete(`/item/${id}`)); 
  },
};
