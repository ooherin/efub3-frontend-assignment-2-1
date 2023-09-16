import React, { useState, useCallback } from "react";
import S from "./style";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { todoSlice } from "../reducer/todo";

const TodoInsert = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      todoSlice.actions.addTodo({
        id: Math.floor(Math.random() * 1000),
        text: value,
        checked: false,
      })
    );
    setValue("");
  };
  return (
    <S.InsertForm onSubmit={onSubmit}>
      <S.Input placeholder="할 일 입력" value={value} onChange={onChange} />
      <MdAdd style={{ fontSize: "50px", color: "orange" }} onClick={onSubmit} />
    </S.InsertForm>
  );
};
export default TodoInsert;
