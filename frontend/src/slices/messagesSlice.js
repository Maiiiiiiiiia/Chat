import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, { payload }) => {
            state.messages = payload;
        },
    },
});

export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
