import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../components/TodoSlice";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
