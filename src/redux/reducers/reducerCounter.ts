import IAction from "./IAction";
const defaultCounter = { counter: 5500 };
const reducerCounter = (state = defaultCounter, action: IAction) => {
  switch (action.type) {
    case "UP":
      return {
        ...state,
        counter: state.counter + 5,
      };
    case "DOWN":
      return {
        ...state,
        counter: state.counter - 5,
      };
    default:
      return state;
  }
};

export default reducerCounter;
