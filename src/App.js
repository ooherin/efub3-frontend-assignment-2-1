import "./App.css";
import Counter from "./components/Timer";
import TodoList from "./components/TodoList";
import styled from "styled-components";
function App() {
  return (
    <>
      <Title>Study Checker</Title>
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
  margin-top: 50px;
`;
const Title = styled.div`
  font-size: 50px;
  margin-left: 350px;
  margin-top: 50px;
`;
