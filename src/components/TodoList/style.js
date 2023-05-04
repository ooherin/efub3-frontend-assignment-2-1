import styled from "styled-components";

const Wrapper = styled.div`
  background-color: skyblue;
  width: 450px;
  font-size: 20px;
  position: relative;
`;
const DeleteButton = styled.button`
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

const Input = styled.input`
  width: 400px;
  height: 50px;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
`;

const TodoList = styled.div`
  height: 720px;
  background-color: orange;
  margin-right: 20px;
`;
const S = {
  Wrapper,
  DeleteButton,
  Todo,
  Input,
  AddButton,
  TodoList,
};

export default S;
