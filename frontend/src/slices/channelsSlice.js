import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../utils/routes';
import getAuthHeader from '../authorizationHeader';

export const channelsApi = createApi({
  reducerPath: 'channels',
  baseQuery: fetchBaseQuery(
    { baseUrl: routes.channelsPath(),
      prepareHeaders: getAuthHeader,
    }
  ),
  tagTypes: ['Channels'],
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => '',
      providesTags: ['Channels'],
    }),
    addChannel: builder.mutation({
      query: (channel) => ({
        url: '',
        method: 'POST',
        body: channel,
      }),
      invalidatesTags: ['Channels'],
    }),

  updateChannel: builder.mutation({
    query: (channel) => ({
        method: 'PATCH',
        url: channel.id,
        body: channel,
    }),
    invalidatesTags: ['Channels'],
  }),
  removeChannel: builder.mutation({
    query: (id) => ({
        method: 'DELETE',
        url: id,
      }),
      invalidatesTags: ['Channels'],
    }),
  }),
});
  
export const { 
  useGetChannelsQuery,
  useAddChannelMutation,
  useRemoveChannelMutation,
  useUpdateChannelMutation,
} = channelsApi;
