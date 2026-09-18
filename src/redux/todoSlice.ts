import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITodo from "./ITodo";

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [{ id: 1, title: "task1" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoAction: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    delTodoAction: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    blockTodoAction: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.blocked = !todo.blocked;
      }
    },
    changeTodoAction: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
  },
});

export const { addTodoAction, delTodoAction, blockTodoAction, changeTodoAction } = todoSlice.actions;
export default todoSlice.reducer;
