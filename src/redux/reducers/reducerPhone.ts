import IAction from "./IAction";

const defaultState = { amount: 100 };

const reducerPhone = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "ADD":
      return { ...state, amount: state.amount + action.payload };
    case "DEL":
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    default:
      return state;
  }
};

export default reducerPhone;
