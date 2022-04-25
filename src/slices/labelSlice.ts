import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
          id: "662CB9B8-5A71-4B74-A628-2AAEC53249CC",
          value: "client 1",
        },
        {
          id: "38D32CCF-3F4C-49F6-BB5D-D184FC0185CB",
          value: "client 2",
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
