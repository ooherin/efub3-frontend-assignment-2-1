import S from "./style";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { todoSlice } from "../reducer/todo";

const Todos = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  //체크하는 기능
  const onCheckTodo = (id, state) => {
    dispatch(todoSlice.actions.checkTodo({ id, checked: state }));
  };

  //삭제하는 기능
  const onDeleteTodo = (id) => {
    dispatch(todoSlice.actions.deleteTodo(id));
  };

  return (
    <S.Wrapper>
      {todos?.map((todo, index) => (
        <S.Todo key={todo.id} checked={todo.checked}>
          <S.Text>
            {index + 1}. {todo.text}
          </S.Text>
          <S.ButtonContainer>
            {/*체크기능*/}
            <AiOutlineCheck
              style={{ fontSize: "32px", color: "blue" }}
              onClick={() => {
                onCheckTodo(todo.id, todo.state);
              }}
            />
            {/*삭제기능*/}
            <AiOutlineDelete
              style={{ fontSize: "32px", color: "red" }}
              onClick={() => {
                onDeleteTodo(todo.id);
              }}
            />
          </S.ButtonContainer>
        </S.Todo>
      ))}
    </S.Wrapper>
  );
};
export default Todos;
