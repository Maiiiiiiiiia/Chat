import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../utils/routes';
import getAuthHeader from '../authorizationHeader';

export const messagesApi = createApi({
  reducerPath: 'messages',
  baseQuery: fetchBaseQuery(
    { baseUrl: routes.messagesPath(), prepareHeaders: getAuthHeader, tagTypes: ['Messages'] }
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
        })
      })
    }),
  }),
});

export const { 
    useGetMessagesQuery, 
    useAddMessageMutation
//     useRemoveMessageMutation,
 } = messagesApi;






// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     messages: [],
// };

// const messageSlice = createSlice({
//     name: 'messages',
//     initialState,
//     reducers: {
//         setMessages: (state, { payload }) => {
//             state.messages = payload;
//         },
//         addMessages: (state, { payload }) => {
//             state.messages.push(payload);
//         }
//     },
// });

// export const { setMessages, addMessages } = messageSlice.actions;
// export default messageSlice.reducer;


