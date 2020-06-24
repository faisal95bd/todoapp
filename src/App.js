import React from 'react';
import './App.css';
import Logo from './icons8-to-do-100.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: [],
    };
  }

  // method for adding an item

  addItem(todoValue) {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: '',
      });
    }
  }

  // method for deleting an ittem

  delItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  updateInput(input) {
    this.setState({
      newItem: input,
    });
  }

  render() {
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
            value={this.state.newItem}
            onChange={(i) => this.updateInput(i.target.value)}
          ></input>
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add Todo
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    {/* <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => {}}
                    /> */}
                    {item.value}
                    <button
                      className="del-btn"
                      onClick={() => this.delItem(item.id)}
                    >
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
}

export default App;
