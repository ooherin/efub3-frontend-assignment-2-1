import "./App.css";
import Counter from "./components/Timer";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
  return (
    <>
      <Title>✏️Study Checker</Title>
      <Template>
        <TodoList />
        <Counter />
      </Template>
    </>
  );
}

export default App;

const Template = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  position: relative;
`;
const Title = styled.div`
  font-size: 50px;
  position: absolute;
  top: 50px;
  left: 330px;
`;
