import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskList() {
  const [todos, setTodos] = useState([]);
  const [Nextid, setNextId] = useState(1);
  const [inputValue, setInputValue] = useState('');

  const handleChangedInput = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: Nextid, text: inputValue, status: "todo" }]);
      setNextId(Nextid + 1);
      setInputValue("");
    }
  }

  const handleDeleteTodo = (index) => {
    const updatedTodo = todos.map((todo, i) =>
      todo.id === index ? todos.filter((_, i) => i.id !== index) : todo
    );
    // setTodos(updatedTodos);
    // console.log("hello" + index)
    // const updatedTodo = todos.filter((_, i) => i.Nextid !== index);
    // console.log("cc" + updatedTodo[1].Nextid);
    setTodos(updatedTodo);
  }

  const handleUpdateTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todos, text: newText } : todo
    );
    setTodos(updatedTodos);
  }

  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: !todo.status } : todo
    )
  }

  const handleStatusChange = (index, newStatus) => {
    console.log("vc" + index);
    const updatedTodo = todos.map((todo, i) =>
      todo.id === index ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodo);
  }

  return (
    <div>
      <h1>Todo List</h1>
      {/* <input type="text"  /> */}
      <div class="container" style={{ "max-width": "50%" }}>
        <div class="row">
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default" >Add new Task </span>
            <input type="text" value={inputValue} onChange={handleChangedInput} placeholder="Enter a new todo" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            <button class="btn btn-outline-primary" onClick={handleAddTodo} >Add todo</button>
          </div>
        </div>
      </div>
      <div class="container" style={{ "max-width": "90%" }}>
        <div className="row">
          {/* NOT DOING LIST */}
          <div className="col">
            <div class="card text-center">
              <div class="card-header">
                <h5 class="card-title">TODO LIST</h5>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  {/* To use map and filter together to render list */}
                  {todos.filter(item => item.status === "todo").map((item, index) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                      <span style={{ color: item.status === "todo" ? 'green' : 'none' }}>
                        {item.text}
                      </span>
                      {/* <input type="text" value={item.text} onChange={(e) => handleUpdateTodo(index, e.target.value)} /> */}
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        class="custom-select"
                      >
                        <option value="todo">Todo</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                      </select>
                      <span type="button" class="btn-delete badge bg-primary " onClick={() => handleDeleteTodo(item.id)}>
                        Delete
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
          {/* IN-PROGRESS LIST */}
          <div className="col">
            <div class="card text-center">
              <div class="card-header">
                <h5 class="card-title">IN-PROGRESS</h5>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  {/* To use map and filter together to render list */}
                  {todos.filter(item => item.status === "in-progress").map((item, index) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>

                      <span style={{ color: item.status === "in-progress" ? 'orange' : 'none' }}>
                        {item.text}
                      </span>

                      {/* <input type="text" value={item.text} onChange={(e) => handleUpdateTodo(index, e.target.value)} /> */}
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        class="custom-select"
                      >
                        <option value="todo">Todo</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                      </select>
                      <span type="button" class="btn-delete badge bg-primary " onClick={() => handleDeleteTodo(item.id)}>
                        Delete
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* TASK DONE LIST */}
          <div className="col">
            <div class="card text-center">
              <div class="card-header">
                <h5 class="card-title">TASK DONE</h5>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  {/* To use map and filter together to render list */}
                  {todos.filter(item => item.status === "done").map((item, index) => (
                    <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                      <span style={{ textDecoration: item.status === "done" ? 'line-through' : 'none' }}>
                        {item.text}
                      </span>

                      {/* <input type="text" value={item.text} onChange={(e) => handleUpdateTodo(index, e.target.value)} /> */}
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        class="custom-select"
                      >
                        <option value="todo">Todo</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                      </select>
                      <span type="button" class="btn-delete badge bg-primary " onClick={() => handleDeleteTodo(item.id)}>
                        Delete
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
export default TaskList;