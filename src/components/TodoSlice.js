import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodos: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        complete: false,
      });
    },
    toggleTodos: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
export const { addTodos, toggleTodos } = todoSlice.actions;
export default todoSlice.reducer;
