import { createSlice } from '@reduxjs/toolkit';

interface State {
  counter: number;
}

const initialState: State = {
  counter: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.counter -= 1;
    },
  },
  selectors: {
    selectCounter: (state) => state.counter,
  },
});

export const { decrement } = counterSlice.actions;
export const { selectCounter } = counterSlice.selectors;
export default counterSlice.reducer;
