const { createSlice } = require("@reduxjs/toolkit");

const STATUSES = Object.freeze({
  INACTIVE: "INACTIVES",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = productSlice.actions;
export default productSlice.reducer;
