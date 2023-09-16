import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const deleteIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.splice(deleteIndex - 1, 1);
    },
    editTodo: (state, action) => {
      const { id, editContent } = action.payload;
      const updateIndex = state.findIndex((todo) => todo.id === id);
      state[updateIndex].content = editContent;
    },
    checkTodo: (state, action) => {
      const { id } = action.payload;
      const checkTodoIndex = state.findIndex((todo) => todo.id === id);
      state[checkTodoIndex].checked = state[checkTodoIndex].checked
        ? false
        : true;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, checkTodo } = todoSlice.actions;
