import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { Item } from "../types/item.type";

export type TodoItemState = {
  /**
   * 終了したTodoItem
   */
  finishedItem: Item[] | null;
  /**
   * 終了していないTodoItem
   */
  notFinishedItem: Item[] | null;
};

const initialState: TodoItemState = {
  finishedItem: null,
  notFinishedItem: null,
};

const TodoItemStateContext = React.createContext<TodoItemState>(initialState);
const SetTodoItemStateContext = React.createContext<
  Dispatch<SetStateAction<TodoItemState>>
>(() => {});

export const useTodoItemState = () => {
  return useContext(TodoItemStateContext);
};
export const useSetTodoItemState = () => {
  return useContext(SetTodoItemStateContext);
};

type TodoItemStateProviderProps = {
  children: React.ReactNode;
};

export const TodoItemStateProvider: React.FC<TodoItemStateProviderProps> = (
  props
) => {
  const [TodoItem, setTodoItem] = useState<TodoItemState>({
    finishedItem: null,
    notFinishedItem: null,
  });

  return (
    <TodoItemStateContext.Provider value={TodoItem}>
      <SetTodoItemStateContext.Provider value={setTodoItem}>
        {props.children}
      </SetTodoItemStateContext.Provider>
    </TodoItemStateContext.Provider>
  );
};
