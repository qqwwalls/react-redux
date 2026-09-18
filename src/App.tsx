import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ITodo from "./redux/reducers/ITodo";
import { useRef } from "react";
import { ICounter, IPhone } from "./redux/reducers/IState";

function App() {
  const inputRef: any = useRef();
  const counter = useSelector(
    (state: ICounter) => state.counterReducer.counter
  );
  const amount = useSelector((state: IPhone) => state.phoneReducer.amount);
  const todos: ITodo[] = useSelector((state: any) => state.todoReducer.todos);

  const dispatch = useDispatch();

  const up = () => dispatch({ type: "UP" });
  const down = () => dispatch({ type: "DOWN" });

  const add = () => dispatch({ type: "ADD", payload: 200 });
  const del = () => dispatch({ type: "DEL", payload: 50 });

  const addTodo = () => {
    const title = inputRef.current.value.trim();
    if (!title) {
      alert("Не можна зберігати порожні дані!");
      return;
    }
    if (todos.some(todo => todo.title === title)) {
      alert("Користувач з таким ім'ям вже існує!");
      return;
    }
    dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title, blocked: false } });
    inputRef.current.value = "";
  };

  const blockTodo = (id: number) => {
    dispatch({ type: "BLOCK_TODO", payload: id });
  };

  const changeTodo = (id: number) => {
    const newTitle = prompt("Введіть нове ім'я користувача:");
    if (newTitle && newTitle.trim() !== "") {
      dispatch({ type: "CHANGE_TODO", payload: { id, title: newTitle.trim() } });
    }
  };

  function handlerKey(event: any): void {
    if (event.key == "Enter") {
      addTodo();
    }
  }

  function removeTodo(id: number) {
    dispatch({ type: "DEL_TODO", payload: id });
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
      `<h1>Redux + React</h1>
      <div className="card">
        <p>Counter {counter}</p>
        <button onClick={up}>UP</button>
        <button onClick={down}>DOWN</button>
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
