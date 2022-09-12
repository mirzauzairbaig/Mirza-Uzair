import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
    decrementBy: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const { increment, decrement, incrementBy, decrementBy } = CounterSlice.actions;
export default CounterSlice.reducer;
