import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import pomodoroReducer from "./slices/pomodoroSlice";
import labelReducer from "./slices/labelSlice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    label: labelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
