import { legacy_createStore as createStore, combineReducers } from "redux";

import reducerCounter from "./reducers/reducerCounter";
import reducerPhone from "./reducers/reducerPhone";
import reducerTodo from "./reducers/reducerTodo";

const combReducers = combineReducers({
  counterReducer: reducerCounter,
  phoneReducer: reducerPhone,
  todoReducer: reducerTodo,
});
const store = createStore(combReducers);
export default store;
