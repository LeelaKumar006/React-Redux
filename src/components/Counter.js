import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increment as incrementAC,
  decrement as decrementAC,
} from "../actions/creators";

const Counter = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  const decrement = () => {
    dispatch(decrementAC(inputRef.current.value));
  };

  const increment = () => {
    dispatch(incrementAC(inputRef.current.value));
  };

  return (
    <div>
      <input type="number" id="val" defaultValue="1" ref={inputRef} />
      <button onClick={decrement}>-</button>
      <span id="counter">{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
