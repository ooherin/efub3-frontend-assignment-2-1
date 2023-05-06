import React, { useState, useRef, useEffect, memo } from "react";
import S from "./style";
import TimeSum from "./TimeSum";
import {
  BsFillPlayFill,
  BsStopFill,
  BsFillSkipBackwardFill,
} from "react-icons/bs";
import { GiSaveArrow } from "react-icons/gi";

const Counter = () => {
  //현재까지 카운트된 시간을 나타내는 상태변수. setInterval로 1초에 1씩 증가됨
  const [count, setCount] = useState(0);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);
  const [saveTime, setSaveTime] = useState([]);
  const [text, setText] = useState({});
  const [timerPlay, setTimerPlay] = useState(true);

  //spendTime은 setInterval에서 반환된 ID를 저장하고, clearInterval에서
  //이 ID값을 참조해 타이머를 멈추고 시작할 수 있다.
  const spendTime = useRef(null);
  const currentTime = useRef();
  const textInput = useRef();

  const onClickTimeSave = () => {
    setText({ time: currentTime.current.innerText });
    textInput.current.focus();
  };

  const onClickTextSave = () => {
    const newTime = { ...text, text: textInput.current.value };
    setText(newTime);
    setSaveTime([...saveTime, newTime]);
    textInput.current.value = "";
  };

  const startCounter = () => {
    setTimerPlay(!timerPlay);
    //spendTime에 담긴 setInterval의 id값이 나중에 endCounter를
    //눌렀을 때 clearInterval에 의해 없어짐
    if (timerPlay === true) {
      spendTime.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    // console.log(spendTime.current);
  };

  const endCounter = () => {
    clearInterval(spendTime.current);
    //timerPlay상태를 false로 바꿔줌
    setTimerPlay(!timerPlay);
  };

  //모든 값을 초기화시켜주는 함수
  const resetCounter = () => {
    setCount(0);
    setCurrentSecond(0);
    setCurrentMinute(0);
    setCurrentHour(0);
    clearInterval(spendTime.current);
    setTimerPlay(true);
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
      <S.SumContainer>
        <TimeSum saveTime={saveTime} />
      </S.SumContainer>
      <S.Wrapper>
        <S.Title>Timer</S.Title>
        <S.Timer ref={currentTime}>
          {currentHour}:{currentMinute}:{currentSecond}
        </S.Timer>
        <S.ButtonContainer>
          <BsFillPlayFill
            style={{ fontSize: "40px", color: "green" }}
            onClick={startCounter}
          />
          <BsStopFill
            style={{ fontSize: "38px", color: "green" }}
            onClick={endCounter}
          />
          <BsFillSkipBackwardFill
            style={{ fontSize: "32px", color: "green" }}
            onClick={resetCounter}
          />
          <GiSaveArrow
            style={{ fontSize: "32px", color: "green" }}
            onClick={onClickTimeSave}
          />
        </S.ButtonContainer>
        <S.SaveTimeContainer>
          {saveTime.map((time) => {
            return (
              <S.SaveTime>
                <div>{time.text}</div>
                <div>{time.time}</div>
              </S.SaveTime>
            );
          })}
        </S.SaveTimeContainer>
        <S.SaveContainer>
          <S.Input ref={textInput} placeholder="공부명 입력" />
          <S.Button onClick={onClickTextSave}>저장</S.Button>
        </S.SaveContainer>
      </S.Wrapper>
    </div>
  );
};

export default Counter;
