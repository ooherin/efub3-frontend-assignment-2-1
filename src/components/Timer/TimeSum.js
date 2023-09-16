import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TimeSum = () => {
  const [timeSum, setTimeSum] = useState(0);
  const timerList = useSelector((state) => state.timer);

  useEffect(() => {
    const hardSum = () => {
      let sum = [0, 0, 0];
      timerList.forEach((e) => {
        let splitedTime = e.time.split(":");
        splitedTime = splitedTime.map((e) => parseInt(e));
        sum = sum.map((e, index) => (sum[index] += splitedTime[index]));
      });
      sum = sum.map((e) => {
        if (e < 10) {
          return "0" + e;
        }
        return e;
      });
      setTimeSum(sum.join(":"));
    };

    hardSum();
  }, [timerList]);

  return (
    <>
      <S.SumText>총 공부시간 {timeSum}</S.SumText>
    </>
  );
};
export default TimeSum;

const SumText = styled.div`
  font-size: 30px;
`;

const S = {
  SumText,
};
