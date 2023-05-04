import styled from "styled-components";
const Todos = ({ todos, onDelete }) => {
  return todos.map((todo) => (
    <Wrapper>
      <div>{todo.id}</div>
      <div>{todo.text}</div>
      {/*props로 받은 onDelete함수를 받아서 실행시킴*/}
      <Button
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        삭제
      </Button>
    </Wrapper>
  ));
};
export default Todos;

const Wrapper = styled.div`
  background-color: skyblue;
  width: 450px;
  height: 50px;
  display: flex;
  margin: 0 auto;
  font-size: 20px;
`;
const Button = styled.button`
  width: 100px;
  heigth: 50px;
`;
