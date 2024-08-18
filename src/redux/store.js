import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import transactionsReducer from './slices/transactionsSlice';
import friendsReducer from './slices/friendsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
    friends: friendsReducer,
  },
});

export default store;
