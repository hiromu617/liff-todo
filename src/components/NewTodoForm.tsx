import React, { useState } from "react";

export const NewTodoForm: React.VFC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(formData)
  };

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
          onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea
          name={formData.description}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Todo Description"
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>
      <div className="mt-4 flex justify-end items-center gap-5">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          Create
        </button>
      </div>
    </form>
  );
};
