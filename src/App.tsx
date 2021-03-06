import React from "react";
import { TodoItemList } from "./components/TodoItemList";
import { TodoItemStateProvider } from "./contexts/TodoItemStateContext";
import { UserIdStateProvider } from "./contexts/UserIdStateContext";

function App() {
  return (
    <UserIdStateProvider>
      <TodoItemStateProvider>
        <div className="bg-blue-50 w-full min-h-screen px-5">
          <div className="lg:w-1/2 w-full m-auto">
            <TodoItemList />
          </div>
        </div>
      </TodoItemStateProvider>
    </UserIdStateProvider>
  );
}

export default App;
