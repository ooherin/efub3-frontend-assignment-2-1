import styled from "styled-components";

const Timer = styled.div`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
  border: 2px solid black;
  width: 200px;
  margin: 0 auto;
`;

const SaveTimeContainer = styled.div`
  width: 600px;
  height: 300px;
  background-color: pink;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const SaveTime = styled.div`
  font-size: 30px;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  width: 100px;
  height: 50px;
  font-size: 30px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
`;

const Wrapper = styled.div`
  background-color: gray;
  margin-left: 20px;
  width: 600px;
`;

const SumContainer = styled.div`
  width: 500px;
  height: 100px;
  background-color: yellowgreen;
  font-size: 30px;
  margin: 0 auto;
`;

const S = {
  Title,
  SaveTimeContainer,
  Button,
  Timer,
  SaveTime,
  Input,
  Wrapper,
  SumContainer,
};

export default S;
