import S from "./style";
//todos와 useCallback함수인 onDelete, onToggle을 가져옴
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";

//Todos는 실제로 todo들을 렌더링 해주는 함수
//index.js에서 onDelete와 onToggle을 받아와서 실행함
const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <S.Wrapper>
      {todos.map((todo, index) => (
        //todo의 checked라는 속성을 styled component인 Todo로 넘김
        <S.Todo key={todo.id} checked={todo.checked}>
          <S.Text>
            {index + 1}. {todo.text}
          </S.Text>
          {/*props로 받은 onDelete함수를 받아서 실행시킴*/}
          <S.ButtonContainer>
            {/*체크기능*/}
            <AiOutlineCheck
              style={{ fontSize: "32px", color: "blue" }}
              onClick={() => {
                onToggle(todo.id);
              }}
            />
            {/*삭제기능*/}
            <AiOutlineDelete
              style={{ fontSize: "32px", color: "red" }}
              onClick={() => {
                onDelete(todo.id);
              }}
            />
          </S.ButtonContainer>
        </S.Todo>
      ))}
    </S.Wrapper>
  );
};
export default Todos;
