import { createSlice } from '@reduxjs/toolkit';
import { updateState } from '../../utils/localStorage';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { list: [] },
  reducers: {
    addTransaction: (state, action) => {
      state.list.push(action.payload);
      updateState('transactions', state.list);
    },
    setTransaction: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addTransaction, setTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
