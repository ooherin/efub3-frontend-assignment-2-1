import { useMemo } from "react";
import S from "./style";

const CountTodo = ({ todos }) => {
  console.log("완료한 todo를 세는중...렌더링");

  const countTrueTodos = (todos) => {
    console.log("true todo 세는중");
    return todos.filter((todo) => todo.checked === true).length;
  };

  const countFalseTodos = (todos) => {
    return todos.filter((todo) => todo.checked === false).length;
  };

  const TrueTodos = useMemo(() => countTrueTodos(todos), [todos]);
  const FalseTodos = useMemo(() => countFalseTodos(todos), [todos]);

  return (
    <S.CountContainer>
      <div className="completed">완료 : {TrueTodos}</div>
      <div className="uncompleted">미완료 : {FalseTodos}</div>
    </S.CountContainer>
  );
};
export default CountTodo;
