import styled from "styled-components";
import S from "./style";
const Todos = ({ todos, onDelete }) => {
  return (
    <S.Wrapper>
      {todos.map((todo, index) => (
        <div>
          <S.Todo>{index + 1}</S.Todo>
          <S.Todo>{todo.text}</S.Todo>
          {/*props로 받은 onDelete함수를 받아서 실행시킴*/}
          <S.DeleteButton
            onClick={() => {
              onDelete(todo.id);
            }}
          >
            삭제
          </S.DeleteButton>
        </div>
      ))}
    </S.Wrapper>
  );
};
export default Todos;

const Wrapper = styled.div`
  background-color: skyblue;
  width: 450px;
  font-size: 20px;
  position: relative;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  right: 0;
`;

const Todo = styled.div`
  background-color: green;
  font-size: 25px;
  padding-top: 10px;
  height: 50px;
  display: inline-block;
  position: relative;
`;
