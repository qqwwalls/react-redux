import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import phoneReducer from "./phoneSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    phoneReducer,
    todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
