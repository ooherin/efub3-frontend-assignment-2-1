import React, { useState, useCallback } from "react";
import styled from "styled-components";
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
      <Input placeholder="할 일 입력" value={value} onChange={onChange} />
      <Button type="submit">+</Button>
    </form>
  );
};
export default TodoInsert;

const Input = styled.input`
  width: 400px;
  height: 50px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
`;
