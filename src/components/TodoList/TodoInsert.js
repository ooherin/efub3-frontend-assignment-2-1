import React, { useState, useCallback } from "react";
import S from "./style";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  //input안의 내용이 바뀔때 실행되는 함수
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //
  const onSubmit = useCallback(
    (e) => {
      //가져온 useCallback함수인 onInsert에 value값을 넣음
      onInsert(value);
      //Value의 값을 비어줌
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <S.Input placeholder="할 일 입력" value={value} onChange={onChange} />
      <S.AddButton type="submit">+</S.AddButton>
    </form>
  );
};
export default TodoInsert;
