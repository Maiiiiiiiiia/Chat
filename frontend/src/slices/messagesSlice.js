/* eslint-disable no-param-reassign */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../utils/routes';
import getAuthHeader from '../authorizationHeader';

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery(
    { baseUrl: routes.messagesPath(), prepareHeaders: getAuthHeader, tagTypes: ['Messages'] },
  ),
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => '',
    }),
    addMessage: builder.mutation({
      query: (newMessage) => ({
        method: 'POST',
        body: newMessage,
      }),
      removeMessage: builder.mutation({
        query: (id) => ({
          method: 'DELETE',
          url: id,
        }),
      }),
    }),
  }),
});

export const { 
  useGetMessagesQuery,
  useAddMessageMutation,
  useRemoveMessageMutation,
} = messagesApi;
