import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  font-size: 20px;
  position: relative;
  padding-top: 30px;
`;

const Text = styled.div`
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
  margin-left: 20px;
  font-size: 20px;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 30px;
  border: 0;
`;

const Todo = styled.div`
  color: ${(props) => (props.checked ? "gray" : "black")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "")};
  display: flex;
`;

const TodoList = styled.div`
  height: 720px;
  margin-right: 20px;
  border: 5px solid orange;
  border-radius: 30px;
`;

const CountContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  height: 50px;
  width: 400px;
  z-index: 10;
  font-size: 30px;
  display: flex;
  position: absolutes;
  bottom: 10;
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
    background-color: #f36959;
  }
`;

const ButtonContainer = styled.div`
  height: 50px;
  position: absolute;
  right: 20px;
  button {
    width: 80px;
    height: 50px;
    font-size: 20px;
    background-color: white;
    border-radius: 20px;
  }
`;
const Title = styled.div`
  height: 30px;
  font-size: 40px;
  margin-left: 170px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const InsertForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 30px;
  width: 350px;
  height: 50px;
  font-size: 35px;
  font-weight: 500;
  border-radius: 20px;
  position: absolute;
  top: -70px;
`;

const S = {
  Title,
  Wrapper,
  Text,
  Todo,
  Input,
  AddButton,
  TodoList,
  CountContainer,
  ButtonContainer,
  InsertForm,
  TitleContainer,
};

export default S;
