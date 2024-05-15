import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../utils/routes';
import getAuthHeader from '../authorizationHeader';

export const channelsApi = createApi({
    reducerPath: 'channel',
    baseQuery: fetchBaseQuery(
      { baseUrl: routes.channelsPath(), prepareHeaders: getAuthHeader, tagTypes: ['Messages'] }),
    endpoints: (builder) => ({
      getChannels: builder.query({
        query: () => '',
      }),
      addChannel: builder.mutation({
        query: (newChannel) => ({
          method: 'POST',
          body: newChannel,
        }),
      updateChannel: builder.mutation({
        query: (channel) => ({
            method: 'PATCH',
            url: channel.id,
            body: channel,
        }),
      }),
      removeMessage: builder.mutation({
        query: (id) => ({
            method: 'DELETE',
            url: id,
          })
        })
      }),
    }),
  });
  
  export const { 
    useGetChannelsQuery,
    useAddChannelMutation,
    useRemoveChannelMutation,
    useUpdateChannelMutation
   } = channelsApi;

// import { createSlice } from '@reduxjs/toolkit';

// export const defaultChannelId = '1';

// const initialState = {
//     channels: [],
//     channelId: defaultChannelId,
// }
// const channelsSlice = createSlice({
//     name: 'channels',
//     initialState,
//     reducers: {
//         setChannels: (state, { payload }) => {
//             state.channels = payload;
//           },
//         setChannelId(state, { payload }) {
//             state.channelId = payload;
//           },
//         moveToChannel(state, { payload }) {
//             state.channelId = payload;
//           },
//     },
// });

// export const { setChannels, setChannelId, moveToChannel } = channelsSlice.actions;
// export default channelsSlice.reducer;
