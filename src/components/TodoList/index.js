import React, { useState, useRef, useCallback, useMemo } from "react";
import TodoInsert from "./TodoInsert";
import Todos from "./Todos";
import S from "./style";
import CountTodo from "./CountTodo";
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(4);

  //onInsert : 추가해주는 함수
  const onInsert = useCallback(
    // onInsert함수 만들어주고 TodoInsert컴포넌트의 props로 설정해줘야함.
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos([...todos, todo]); // concat으로 todos배열에 todo를 추가해서 새로운 배열을 생성되는거임.
      nextId.current += 1;
    },
    [todos] // todos가 바뀌었을 때만 함수 생성
  );

  //삭제하는 함수
  const onDelete = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  //true false 바꿔주는 함수
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos, setTodos]
  );

  return (
    <S.TodoList>
      <TodoInsert onInsert={onInsert} />
      <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
      <CountTodo todos={todos} />
    </S.TodoList>
  );
};

export default TodoList;
