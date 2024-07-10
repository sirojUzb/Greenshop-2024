import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
  },
  reducers: {
    setCategoryModal: (state) => {
      state.categoryModal = !state.setCategoryModal;
    },
  },
});
export default modal.reducer;
export const { setCategoryModal } = modal.actions;
