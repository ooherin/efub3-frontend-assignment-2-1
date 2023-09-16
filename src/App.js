import "./App.css";
import Counter from "./components/Timer";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
  return (
    <Template>
      <TodoList />
      <Counter />
    </Template>
  );
}

export default App;

const Template = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  position: relative;
`;
