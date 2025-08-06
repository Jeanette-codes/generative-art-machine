import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//     value: number
//     canvasWidth: number
//     canvasHeight: number
//     showInitialLines: boolean
//     showIntersectingCircles: boolean
//     showConnectingLines: boolean
//     circleRadius: number
//     iterations: number
// }

const initialState = {
  value: 0,
  canvasWidth: 800,
  canvasHeight: 600,
  showInitialLines: true,
  showIntersectingCircles: true,
  showConnectingLines: true,
  circleRadius: 50,
  iterations: 20,
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    changeIterations: (state, action) => {
      state.iterations = action.payload;
    },
    toggleShowInitialLines: (state, action) => {
      state.showInitialLines = action.payload;
    },
    toggleIntersectingCircles: (state, action) => {
      state.showIntersectingCircles = action.payload;
    },
    changeCircleRadius: (state, action) => {
      state.circleRadius = action.payload;
    },
    toggleShowConnectingLines: (state, action) => {
      state.showConnectingLines = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeIterations,
  toggleShowInitialLines,
  toggleIntersectingCircles,
  changeCircleRadius,
  toggleShowConnectingLines,
} = canvasSlice.actions;

export default canvasSlice.reducer;
