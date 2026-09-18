import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ITodo from "./redux/ITodo";
import { useRef } from "react";
import { RootState, AppDispatch } from "./redux/store";
import { up, down } from "./redux/counterSlice";
import { addPhone, delPhone } from "./redux/phoneSlice";
import { addTodoAction, delTodoAction, blockTodoAction, changeTodoAction } from "./redux/todoSlice";

function App() {
  const inputRef: any = useRef();
  const counter = useSelector((state: RootState) => state.counterReducer.counter);
  const amount = useSelector((state: RootState) => state.phoneReducer.amount);
  const todos: ITodo[] = useSelector((state: RootState) => state.todoReducer.todos);

  const dispatch = useDispatch<AppDispatch>();

  const handleUp = () => dispatch(up());
  const handleDown = () => dispatch(down());

  const add = () => dispatch(addPhone(200));
  const del = () => dispatch(delPhone(50));

  const addTodo = () => {
    const title = inputRef.current.value.trim();
    if (!title) {
      alert("Не можна зберігати порожні дані!");
      return;
    }
    if (todos.some((todo) => todo.title === title)) {
      alert("Користувач з таким ім'ям вже існує!");
      return;
    }
    dispatch(addTodoAction({ id: Date.now(), title, blocked: false }));
    inputRef.current.value = "";
  };

  const blockTodo = (id: number) => {
    dispatch(blockTodoAction(id));
  };

  const changeTodo = (id: number) => {
    const newTitle = prompt("Введіть нове ім'я користувача:");
    if (newTitle && newTitle.trim() !== "") {
      dispatch(changeTodoAction({ id, title: newTitle.trim() }));
    }
  };

  function handlerKey(event: any): void {
    if (event.key == "Enter") {
      addTodo();
    }
  }

  function removeTodo(id: number) {
    dispatch(delTodoAction(id));
  }

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux + React</h1>
      <div className="card">
        <p>Counter {counter}</p>
        <button onClick={handleUp}>UP</button>
        <button onClick={handleDown}>DOWN</button>
      </div>
      <div className="card">
        <p>Phone {amount}</p>
        <button onClick={add}>ADD</button>
        <button onClick={del}>DELETE</button>
      </div>
      <div className="card">
        <input type="text" ref={inputRef} onKeyDown={handlerKey} />
        <button onClick={addTodo}>Add Todo</button>
        {todos.length ? (
          todos.map((el) => (
            <div
              key={el.id}
              style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
            >
              <span style={{ textDecoration: el.blocked ? "line-through" : "none", marginRight: "10px" }}>
                {el.title}
              </span>
              <button onClick={() => removeTodo(el.id)}>Delete</button>
              <button onClick={() => blockTodo(el.id)}>Block</button>
              <button onClick={() => changeTodo(el.id)}>Change</button>
            </div>
          ))
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </>
  );
}

export default App;
