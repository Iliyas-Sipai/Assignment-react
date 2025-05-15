import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus } from "./Action/ActionCom";

const SetCounterCopo = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);
  const addFun = () => {
    dispatch({ type: add });
  };
  const minusFun = () => {
    dispatch({ type: minus });
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={addFun}>Add</button>
      <button onClick={minusFun}>Minus</button>
    </div>
  );
};

export default SetCounterCopo;
