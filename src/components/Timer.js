import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [saveTime, setSaveTime] = useState([]);

  const spendTime = useRef(null);
  const currentTime = useRef();

  const onClickSaveTime = () => {
    console.log(currentTime.current);
    const nowTime = currentTime.current.innerText;
    setSaveTime([...saveTime, nowTime]);
  };
  const startCounter = () => {
    spendTime.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const endCounter = () => {
    clearInterval(spendTime.current);
  };

  const resetCounter = () => {
    setCount(0);
    setCurrentSecond(0);
    setCurrentMinute(0);
    setCurrentHour(0);
    clearInterval(spendTime.current);
  };

  //useEffect  :안에있는 updateTimer를 count가 바뀔때마다 실행시켜줌
  //updateTimer함수는 count상태값을 사용하여 시간,분,초를 계산하고, 이를
  //이용해 currentSecond, currentHour, currentMinute의 상태를 바꿔준다.
  useEffect(() => {
    const updateTimer = () => {
      const checkMinutes = Math.floor(count / 60);
      let minutes = checkMinutes % 60;
      let hours = Math.floor(count / 3600);
      let seconds = count % 60;
      {
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      }
      {
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
      }
      setCurrentSecond(seconds);
      setCurrentHour(hours);
      setCurrentMinute(minutes);
    };
    updateTimer();
  }, [count]);

  return (
    <>
      <p>타이머</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={endCounter}>정지</button>
      <button onClick={resetCounter}>초기화</button>
      <button onClick={onClickSaveTime}>저장</button>
      <Clock ref={currentTime}>
        {currentHour}:{currentMinute}:{currentSecond}
      </Clock>
      <SaveTimeContainer>
        {saveTime.map((time) => {
          return <div>{time}</div>;
        })}
      </SaveTimeContainer>
    </>
  );
};

export default Counter;

const Clock = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const SaveTimeContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: pink;
`;
