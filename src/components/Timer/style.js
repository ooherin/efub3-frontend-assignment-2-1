import styled from "styled-components";

const Wrapper = styled.div`
  border: 5px solid yellowgreen;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 720px;
`;

const Title = styled.div`
  height: 30px;
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
  padding-top: 20px;
  display: flex;
  margin: 0 auto;
  width: 300px;
  justify-content: space-around;
`;

const SaveTimeContainer = styled.div`
  width: 500px;
  height: 400px;
  background-color: #f1f8e0;
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
  font-size: 20px;
`;

const SaveContainer = styled.div`
  display: flex;
`;

// const TotalTime = styled.div`
//   background-color: #f3ef79;
//   padding-left: 30px;
//   width: 350px;
//   height: 50px;
//   font-size: 35px;
//   font-weight: 500;
//   border-radius: 20px;
//   position: absolute;
//   top: 70px;
// `;

const SumContainer = styled.div`
  background-color: #f3ef79;
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
  SumContainer,
  SaveContainer,
  ButtonContainer,
  Title,
  SaveTimeContainer,
  Button,
  Timer,
  SaveTime,
  Input,
  Wrapper,
  // SumContainer,
};

export default S;
