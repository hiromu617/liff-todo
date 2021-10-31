import React, { useState } from "react";
import { Item } from "../types/item.type";

export type EditTodoFormProps = {
  TodoItem: Item;
};

export const EditTodoForm: React.VFC<EditTodoFormProps> = ({ TodoItem }) => {
  const [formData, setFormData] = useState({
    title: TodoItem.title,
    description: TodoItem.description,
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const deleteTodoItem = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          value={formData.title}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name={formData.title}
          placeholder="Todo title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="description"
          placeholder="Todo Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>
      <div className="mt-4 flex justify-end items-center gap-5">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Save
        </button>
        <button
          onClick={() => deleteTodoItem()}
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
        >
          Delete
        </button>
      </div>
    </form>
  );
};
