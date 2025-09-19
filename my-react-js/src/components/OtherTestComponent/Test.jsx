// action types
const INCREMENT = "INCREMENT";

// action creator
const increment = () => ({ type: INCREMENT });

// initial state
const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state, // copying the previous state
        value: state.value + 1, // updating value
      };
    default:
      return state;
  }
}


import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1; // but Immer handles
      //immutability behind the scenes
    },
  },
});
