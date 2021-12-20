import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    completeTask: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, completeTask } = tasksSlice.actions;
