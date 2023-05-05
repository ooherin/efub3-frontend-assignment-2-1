import S from "./style";
//todos와 useCallback함수인 onDelete, onToggle을 가져옴

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
            <button
              onClick={() => {
                onToggle(todo.id);
              }}
            >
              확인
            </button>
            <button
              onClick={() => {
                onDelete(todo.id);
              }}
            >
              삭제
            </button>
          </S.ButtonContainer>
        </S.Todo>
      ))}
    </S.Wrapper>
  );
};
export default Todos;
