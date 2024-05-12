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
        addMessages: (state, { payload }) => {
            state.messages.push(payload);
        }
    },
});

export const { setMessages, addMessages } = messageSlice.actions;
export default messageSlice.reducer;
