import styled from "styled-components";

const Wrapper = styled.div`
  /* background-color: skyblue; */
  width: 500px;
  font-size: 20px;
  position: relative;
  padding-top: 30px;
`;

const Text = styled.div`
  /* background-color: green; */
  padding-left: 30px;
  font-size: 30px;
  padding-top: 10px;
  height: 50px;
  display: inline-block;
  position: relative;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  margin-top: 30px;
  margin-left: 20px;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
`;

const Todo = styled.div`
  color: ${(props) => (props.checked ? "gray" : "black")};
  display: flex;
`;

const TodoList = styled.div`
  height: 720px;
  background-color: orange;
  margin-right: 20px;
`;

const CountContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  height: 50px;
  width: 400px;
  z-index: 10;
  font-size: 30px;
  display: flex;
  div {
    margin-left: 20px;
    width: 150px;
    height: 50px;
    display: block;
    color: white;
    text-align: center;
    padding-top: 5px;
    border-radius: 10px;
  }
  .completed {
    background-color: green;
  }
  .uncompleted {
    background-color: red;
  }
`;

const ButtonContainer = styled.div`
  height: 50px;
  position: absolute;
  right: 0;
  button {
    width: 80px;
    height: 50px;
    font-size: 20px;
    background-color: white;
    border-radius: 20px;
  }
`;
const S = {
  Wrapper,
  Text,
  Todo,
  Input,
  AddButton,
  TodoList,
  CountContainer,
  ButtonContainer,
};

export default S;
