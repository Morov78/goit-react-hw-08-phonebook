import { createSlice } from '@reduxjs/toolkit';

const sortInitialState = 'nosort';

const sortMethodSlice = createSlice({
  name: 'sortMethod',
  initialState: sortInitialState,
  reducers: {
    setSort(state, action) {
      return action.payload;
    },
  },
});

export const { setSort } = sortMethodSlice.actions;
export const sortReducer = sortMethodSlice.reducer;
