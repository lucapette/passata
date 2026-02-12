import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Pomodoro from "../types/pomodoro";

interface PomodoroState {
  pomodoros: Pomodoro[];
}

const initialState: PomodoroState = {
  pomodoros: [],
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    loadPomodoros: (state) => {
      state.pomodoros = [
        {
          label: "client_1",
          completedAt: Date.now(),
          duration: 25 * 60,
        },
        {
          label: "client_2",
          completedAt: Date.now() - 10000000,
          duration: 25 * 60,
        },
      ];
    },
    addPomodoro: (state, action: PayloadAction<Pomodoro>) => {
      state.pomodoros.unshift(action.payload);
    },
  },
});

export const { loadPomodoros, addPomodoro } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
