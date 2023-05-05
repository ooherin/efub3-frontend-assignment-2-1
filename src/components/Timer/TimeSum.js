import { useState, useEffect } from "react";

const TimeSum = ({ saveTime }) => {
  const [timeSum, setTimeSum] = useState(0);

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

// import S from "./style";
// import { useState, useMemo, useEffect } from "react";

// const TimeSum = ({ saveTime }) => {
//   const [timeSum, setTimeSum] = useState(0);

//   //useMemo로 saveTime(인자로 받아옴)이 바뀔때만 hardSum을 실행시키기
//   const hardSum = useMemo(() => {
//     let sum = [0, 0, 0];
//     saveTime.forEach((e) => {
//       let splitedTime = e.time.split(":");
//       //['0', '00', '03']
//       splitedTime = splitedTime.map((e) => parseInt(e));
//       //[0,0,3];

//       //sum에다가 기록한 시간 더하기
//       sum = sum
//         .map((e, index) => {
//           return (sum[index] += splitedTime[index]);
//         })
//         .join(":");
//       console.log(sum);
//       splitedTime = "";
//     });
//     setTimeSum(sum);
//   }, [saveTime]);

//   return (
//     <S.SumContainer>
//       <span>총 공부시간: {timeSum}</span>
//     </S.SumContainer>
//   );
// };
// export default TimeSum;
