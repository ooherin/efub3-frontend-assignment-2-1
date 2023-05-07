import { useMemo } from "react";
import S from "./style";

//todo들중 checked 속성을 t/f로 판단하여 완료/미완료한 todo를 세주는 기능을 하는 함수
//기존의 값을 캐싱하기 위해 useMemo를 사용함
const CountTodo = ({ todos }) => {
  console.log("완료한 todo를 세는중...");
  const countTrueTodos = (todos) => {
    return todos.filter((todo) => todo.checked === true).length;
  };

  const countFalseTodos = (todos) => {
    return todos.filter((todo) => todo.checked === false).length;
  };

  //useMemo는 countTrueTodos(todos)의 값을 저장해놓음. todos가 바뀌기 전까지 이 저장
  //한 값을 재활용함.
  //useMemo는 아래와 같이 값 자체(countTrueTodos)를 캐싱할 때 사용함.
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
