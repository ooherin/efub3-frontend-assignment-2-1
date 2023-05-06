import React, { useState, useCallback } from "react";
import S from "./style";
import { MdAdd } from "react-icons/md";

//callback함수인 onInsert를 props로 넣음
const TodoInsert = ({ onInsert }) => {
  //value : input안의 값을 관리해주는 state
  const [value, setValue] = useState("");

  //onChange: input안의 내용이 바뀔때 실행되는 함수
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //onSubmit : 저장버튼 눌렀을 때 실행되는 함수
  const onSubmit = useCallback(
    (e) => {
      //가져온 useCallback함수인 onInsert에 value값을 넣음
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <S.InsertForm onSubmit={onSubmit}>
      <S.Input placeholder="할 일 입력" value={value} onChange={onChange} />
      <MdAdd style={{ fontSize: "50px", color: "orange" }} onClick={onSubmit} />
    </S.InsertForm>
  );
};
export default TodoInsert;
