import React, { Component } from "react";
import ToDoItem from "../../components/ToDoItem";
import NewTodoForm from "../../components/NewTodoForm";
import styled from "styled-components";

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

const Header = styled.h1`
  color: #fff;
`;

const DestroyButton = styled.button`
  border-radius: 10px;
  background: red;
  padding: 5px;
  color: #fff;
  margin-bottom: 10px;
`;

class ToDoList extends Component {
  // componentDidMount() {
  //   fetch("http://localhost:3000/todo_items")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));

  // }

  static defaultProps = {
    tasks: [],
    title: "My stuff",
  };

  state = {
    tasks: this.props.tasks,
    draft: "",
  };

  updateDraft = (event) => {
    this.setState({ draft: event.target.value });
  };

  removeAll = () => {
    this.setState({ tasks: [] });
  };

  addToDo = () => {
    const { tasks, draft } = this.state;
    const list = tasks;
    list.push({ text: draft, done: false });
    this.setState({ tasks: list, draft: "" });
  };

  render() {
    const { title } = this.props;
    const { tasks, draft } = this.state;

    return (
      <Container>
        <Header>{title}</Header>

        <DestroyButton onClick={this.removeAll}>Remove All</DestroyButton>
        {tasks.map((task) => (
          <ToDoItem text={task.content} done={task.done} />
        ))}
        <NewTodoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft}
        />
      </Container>
    );
  }
}

export default ToDoList;
