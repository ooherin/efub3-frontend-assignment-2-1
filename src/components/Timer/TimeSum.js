import { useState, useEffect } from "react";

const TimeSum = ({ saveTime }) => {
  const [timeSum, setTimeSum] = useState(0);
  //이게 계속 나온는 것을 막으려면?
  console.log("총 공부시간 렌더링 됨");

  //useMemo는 의존성 배열의 값이 변경되지 않은 한 이전의 계산한 값을 유지함.
  //기존의 값을 재활용하지 않는 useEffect를 사용하는 것이 더 적절함
  useEffect(() => {
    const hardSum = () => {
      let sum = [0, 0, 0];
      saveTime.forEach((e) => {
        let splitedTime = e.time.split(":");
        splitedTime = splitedTime.map((e) => parseInt(e));
        sum = sum.map((e, index) => (sum[index] += splitedTime[index]));
      });
      setTimeSum(sum.join(":"));
    };

    hardSum();
  }, [saveTime]);

  return (
    <>
      <span>총 공부시간: {timeSum}</span>
    </>
  );
};
export default TimeSum;
