import React, { useState, useRef, useEffect } from "react";
import S from "./style";
import TimeSum from "./TimeSum";
import {
  BsFillPlayFill,
  BsStopFill,
  BsFillSkipBackwardFill,
} from "react-icons/bs";
import { GiSaveArrow } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { timerSlice } from "../../reducer/timer";

const Counter = () => {
  //현재까지 카운트된 시간을 나타내는 상태변수. setInterval로 1초에 1씩 증가됨
  const [count, setCount] = useState(0);
  //시간을 저장해주는 state, 배열에 각각 시간 : 분 : 초 를 계산해 넣어준다.
  const [time, setTime] = useState([0, 0, 0]);
  const timerList = useSelector((state) => state.timer);

  //렌더링 할 text를 저장해주는 state
  const [timerPlay, setTimerPlay] = useState(true);

  const spendTime = useRef(null);
  const textInput = useRef();

  //onClickFocusMove : input으로 focus를 해주는 함수
  const onClickFocusMove = () => {
    if (!timerPlay) {
      alert("타이머를 멈추고 저장하세요!");
    }
    textInput.current.focus();
  };

  const dispatch = useDispatch();
  //onCLickListSave : 최종적으로 렌더링될 타임 list에 기존의 시간과, input에 적어준 text값을 저장한다.
  const onCLickListSave = () => {
    //timeList에 저장하기
    const newTimeList = {
      time: `${time[0]}:${time[1]}:${time[2]}`,
      text: textInput.current.value,
    };
    dispatch(timerSlice.actions.addTimer(newTimeList));
    textInput.current.value = "";
  };

  //onClickStartCounter : counter를 시작하는 함수
  const onClickStartCounter = () => {
    setTimerPlay(!timerPlay);

    if (timerPlay === true) {
      spendTime.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };

  //onClickEndCounter: counter를 끝내주는 함수
  const onClickEndCounter = () => {
    clearInterval(spendTime.current);
    //timerPlay상태를 false로 바꿔줌
    setTimerPlay(!timerPlay);
  };

  //onClickResetCounter: 모든 값을 초기화시켜주는 함수
  const onClickResetCounter = () => {
    setCount(0);
    clearInterval(spendTime.current);
    setTimerPlay(true);
  };

  useEffect(() => {
    let hour = Math.floor(count / 60) % 60;
    let minute = Math.floor(count / 3600);
    let second = count % 60;

    if (second < 10) {
      second = "0" + second;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }
    setTime([hour, minute, second]);
  }, [count]);

  return (
    <div>
      <S.SumContainer>
        <TimeSum />
      </S.SumContainer>
      <S.Wrapper>
        <S.Title>Timer</S.Title>
        <S.Timer>
          {time[0]}:{time[1]}:{time[2]}
        </S.Timer>
        <S.ButtonContainer>
          <BsFillPlayFill
            style={{ fontSize: "40px", color: "green" }}
            onClick={onClickStartCounter}
          />
          <BsStopFill
            style={{ fontSize: "38px", color: "green" }}
            onClick={onClickEndCounter}
          />
          <BsFillSkipBackwardFill
            style={{ fontSize: "32px", color: "green" }}
            onClick={onClickResetCounter}
          />
          <GiSaveArrow
            style={{ fontSize: "32px", color: "green" }}
            onClick={onClickFocusMove}
          />
        </S.ButtonContainer>
        <S.SaveTimeContainer>
          {timerList.map((time) => {
            return (
              <S.SaveTime key={Math.floor(Math.random() * 1000)}>
                <div>{time.text}</div>
                <div>{time.time}</div>
              </S.SaveTime>
            );
          })}
        </S.SaveTimeContainer>
        <S.SaveContainer>
          <S.Input ref={textInput} placeholder="공부명 입력" />
          <S.Button onClick={onCLickListSave}>저장</S.Button>
        </S.SaveContainer>
      </S.Wrapper>
    </div>
  );
};

export default Counter;
