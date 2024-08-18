import { createSlice } from "@reduxjs/toolkit";
import { updateState } from "../../utils/localStorage";

export const friendsSlice = createSlice({
  name: "friends",
  initialState: { list: [] },
  reducers: {
    addFriend: (state, action) => {
      state.list.push(action.payload);
      updateState('friends', state.list);
    },
    setFriends: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addFriend, setFriends } = friendsSlice.actions;
export default friendsSlice.reducer;
