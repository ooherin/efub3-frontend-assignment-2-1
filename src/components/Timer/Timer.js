import React, { useState, useRef, useEffect } from "react";
import S from "./style";
import TimeSum from "./TimeSum";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [saveTime, setSaveTime] = useState([]);
  const [text, setText] = useState({});

  const spendTime = useRef(null);
  const currentTime = useRef();
  const textInput = useRef();

  const onClickSaveTime = () => {
    console.log(currentTime.current);
    setText({ time: currentTime.current.innerText });
    // setSaveTime([...saveTime, nowTime]);
    textInput.current.focus();
  };

  const onClickTextSave = () => {
    const newTime = { ...text, text: textInput.current.value };
    setText(newTime);
    setSaveTime([...saveTime, newTime]);
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
    <div>
      <S.Wrapper>
        <S.Title>타이머</S.Title>
        <S.Timer ref={currentTime}>
          {currentHour}:{currentMinute}:{currentSecond}
        </S.Timer>
        <S.Button onClick={startCounter}>시작</S.Button>
        <S.Button onClick={endCounter}>정지</S.Button>
        <S.Button onClick={resetCounter}>초기화</S.Button>
        <S.Button onClick={onClickSaveTime}>저장</S.Button>
        <S.SaveTimeContainer>
          {saveTime.map((time) => {
            return (
              <S.SaveTime>
                <span>{time.text}</span>
                <span>{time.time}</span>
              </S.SaveTime>
            );
          })}
        </S.SaveTimeContainer>
        <S.Input ref={textInput} placeholder="공부명 입력" />
        <S.Button onClick={onClickTextSave}>저장</S.Button>
      </S.Wrapper>
      <TimeSum saveTime={saveTime} />
    </div>
  );
};

export default Counter;
