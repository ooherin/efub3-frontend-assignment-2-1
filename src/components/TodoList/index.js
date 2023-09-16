import React from "react";
import TodoInsert from "./TodoInsert";
import Todos from "./Todos";
import S from "./style";

const TodoList = () => {
  return (
    <>
      <S.TodoList>
        <S.TitleContainer>✏️Study Checker</S.TitleContainer>
        <S.Title>Planner</S.Title>
        <TodoInsert />
        <Todos />
        {/* <CountTodo /> */}
      </S.TodoList>
    </>
  );
};

export default TodoList;
