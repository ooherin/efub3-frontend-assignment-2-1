import styled from "styled-components";

const Wrapper = styled.div`
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const Title = styled.div`
  height: 50px;
  font-size: 40px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Timer = styled.div`
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
  border: 2px solid black;
  width: 200px;
  margin: 0 auto;
  padding-left: 20px;
  background-color: white;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const SaveTimeContainer = styled.div`
  width: 500px;
  height: 400px;
  background-color: pink;
  margin: 0 auto;
  border-radius: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const SaveTime = styled.div`
  font-size: 30px;
  padding-top: 10px;
  display: flex;
  width: 300px;
  margin: 0 auto;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
`;

const SumContainer = styled.div`
  width: 500px;
  height: 50px;
  background-color: yellowgreen;
  font-size: 30px;
`;

const SaveContainer = styled.div`
  display: flex;
`;

const TotalTime = styled.div`
  background-color: yellow;
  height: 50px;
  font-size: 30px;
  margin: 0 auto;
`;

const S = {
  TotalTime,
  SaveContainer,
  ButtonContainer,
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
