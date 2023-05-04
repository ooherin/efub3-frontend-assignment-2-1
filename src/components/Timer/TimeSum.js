import S from "./style";
import { useState, useMemo } from "react";

// const hardCalculate = (number) => {
//   for (let i = 0; i < 9999; i++) {
//     return number + 10000;
//   }
const TimeSum = ({ saveTime }) => {
  const [timeSum, setTimeSum] = useState(0);

  console.log(saveTime);
  //   const [hardNumber, setHardNumber] = useState(1);

  //useMemo는 hardNumber가 변경될때만 hardCalculate를 호출한다.
  //saveTime의 time변수만 함
  //e.time에 0을 버리고
  //parseInt로 바꿔준다
  const hardSum = useMemo(() => {
    let sum = 0;
    saveTime.forEach((e) => {
      //00앞에 있는 0과:을 지워주는 코드
      const strippedString = e.time.replace(/^0+|:/g, "");
      sum += parseInt(strippedString);
    });
    setTimeSum(sum);
  }, [saveTime]);

  return (
    <S.SumContainer>
      <span>계산합: {timeSum}</span>
    </S.SumContainer>
  );
};
export default TimeSum;
