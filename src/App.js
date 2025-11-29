import React, { useState } from "react";
import "./App.css";
import Logo from "./icons8-to-do-100.png";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  // method for adding an item
  const addItem = (todoValue) => {
    if (todoValue !== "") {
      const newItemObj = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };

      setList([...list, newItemObj]);
      setNewItem("");
    }
  };

  // method for deleting an item
  const delItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const updateInput = (input) => {
    setNewItem(input);
  };

  return (
    <div>
      <img className="logo" src={Logo} alt="todo logo" />
      <h1 className="app-title"> My ToDo List</h1>
      <div className="container">
        Add todo... <br />
        <input
          type="text"
          className="text-field"
          placeholder="write a todo"
          required
          value={newItem}
          onChange={(i) => updateInput(i.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => addItem(newItem)}
          disabled={!newItem.length}
        >
          Add Todo
        </button>
        <div className="list">
          <ul>
            {list.map((item) => {
              return (
                <li key={item.id}>
                  {/* <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    /> */}
                  {item.value}
                  <button className="del-btn" onClick={() => delItem(item.id)}>
                    Delete
                  </button>
                </li>
              );
            })}
            {/* <li>
                <input type="checkbox" />
                Learn React
                <button className="del-btn"> Delete</button>
              </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
