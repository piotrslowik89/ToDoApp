import React, { Component } from "react";

class ToDoItem extends Component {
  state = { done: false };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const { text } = this.props;
    return (
      <div onClick={this.toggleDone}>
        <p>{text}</p>
      </div>
    );
  }
}

class ToDoList extends Component {
  state = {
    tasks: this.props.tasks,
    draft: "",
  };

  updateDraft = (event) => {
    this.setState({ draft: event.target.value });
  };

  addToDo = () => {
    const { tasks, draft } = this.state;
    const list = tasks;
    list.push(draft);
    this.setState({ tasks: list, draft: "" });
  };

  render() {
    const { title } = this.props;
    const { tasks, draft } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {tasks.map((task) => (
          <ToDoItem task={task} />
        ))}
        <input type="text" onChange={this.updateDraft} value={draft} />
        <button onClick={this.addToDo}>Add</button>
      </div>
    );
  }
}
// rcc emmet ctrl c ctrl v dob(do destukturyzacji)

class App extends Component {
  myTasks = [{ text: "Record a ReactJS video" }, { text: "Go for a walk" }];
  render() {
    return (
      <div>
        <ToDoList title="My stuff" tasks={this.myTasks} />
      </div>
    );
  }
}
export default App;
