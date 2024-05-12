import { createSlice } from '@reduxjs/toolkit';

export const defaultChannelId = '1';

const initialState = {
    channels: [],
    channelId: defaultChannelId,
}
const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        setChannels: (state, { payload }) => {
            state.channels = payload;
          },
        setChannelId(state, { payload }) {
            state.channelId = payload;
          },
        moveToChannel(state, { payload }) {
            state.channelId = payload;
          },
    },
});

export const { setChannels, setChannelId, moveToChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
