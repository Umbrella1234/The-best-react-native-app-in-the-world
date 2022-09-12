import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EmployeesState {
  value: number;
}

const initialState: EmployeesState = {
  value: 0,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  employeesSlice.actions;

export const employeesReducer = employeesSlice.reducer;
