import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ulid } from "ulid";
import { Label } from "../types/label";

interface LabelState {
  labels: Label[];
}

const initialState: LabelState = {
  labels: [],
};

export const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    loadLabels: (state) => {
      state.labels = [
        {
          id: ulid(),
          value: "client_1",
        },
        {
          id: ulid(),
          value: "client_2",
        },
      ];
    },
    addLabel: (state, action: PayloadAction<Label>) => {
      state.labels.unshift(action.payload);
    },
  },
});

export const { loadLabels, addLabel } = labelSlice.actions;

export default labelSlice.reducer;
