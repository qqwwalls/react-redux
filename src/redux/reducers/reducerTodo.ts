import IAction from "./IAction";
const defaultState = { todos: [{ id: 1, title: "task1" }] };

const reducerTodo = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DEL_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "BLOCK_TODO":
      return {
        ...state,
        todos: state.todos.map((todo: any) =>
          todo.id === action.payload ? { ...todo, blocked: !todo.blocked } : todo
        ),
      };
    case "CHANGE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo: any) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        ),
      };
    default:
      return state;
  }
};

export default reducerTodo;
