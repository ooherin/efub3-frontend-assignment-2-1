import React, { useState, useRef, useCallback, useMemo } from "react";
import TodoInsert from "./TodoInsert";
import Todos from "./Todos";
import S from "./style";
import CountTodo from "./CountTodo";

const TodoList = () => {
  //todos 관리해주는 메인state. 하위 컴포넌트로 이동해야 할 state
  const [todos, setTodos] = useState([]);
  //nextId: 다음 id
  //id값을 확인(이 id값은 앞에 나타난 index값이랑 다른값, 모두 고유한 id를 지님)
  //삭제나 토글로 list를 변경할 때 사용
  //25번쨰 줄
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

      console.log(todo.id);
      setTodos([...todos, todo]); // concat으로 todos배열에 todo를 추가해서 새로운 배열을 생성되는거임.
      nextId.current += 1;
    },
    [todos] // todos가 바뀌었을 때만 함수 생성
  );

  //onDelete : 삭제하는 함수
  const onDelete = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  //onToggle : todo의 checked속성을 true/false 바꿔주는 함수
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
    <>
      <S.TodoList>
        <S.Title>Planner</S.Title>
        <TodoInsert onInsert={onInsert} />
        <Todos todos={todos} onDelete={onDelete} onToggle={onToggle} />
        <CountTodo todos={todos} />
      </S.TodoList>
    </>
  );
};

export default TodoList;
