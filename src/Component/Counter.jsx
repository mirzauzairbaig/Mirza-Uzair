import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement , incrementBy , decrementBy} from "./CounterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(10))}>increment By 10</button>
      <button onClick={()=> dispatch(decrementBy(10))}>Decrement By 10</button>
      <h1>Hi Counter !</h1>
    </div>
  );
};

export default Counter;
