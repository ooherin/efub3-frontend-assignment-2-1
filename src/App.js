import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Timer";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
