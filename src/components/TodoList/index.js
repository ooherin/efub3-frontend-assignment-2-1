import React, { useState, useRef, useCallback } from "react";
import TodoInsert from "./TodoInsert";
import Todos from "./Todos";
import S from "./style";
const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    // onInsert함수 만들어주고 TodoInsert컴포넌트의 props로 설정해줘야함.
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); // concat으로 todos배열에 todo를 추가해서 새로운 배열을 생성되는거임.
      nextId.current += 1;
    },
    [todos] // todos가 바뀌었을 때만 함수 생성
  );

  const onDelete = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    },
    [todos]
  );
  return (
    <S.TodoList>
      <TodoInsert onInsert={onInsert} />
      <Todos todos={todos} onDelete={onDelete} />
    </S.TodoList>
  );
};

export default TodoList;
