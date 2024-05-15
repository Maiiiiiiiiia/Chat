import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../utils/routes';

  const getAuthHeader = (headers) => {
    const token = localStorage.getItem('token');
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  };

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery(
    { baseUrl: routes.apiPath, prepareHeaders: getAuthHeader, tagTypes: ['Auth'] },
  ),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        method: 'POST',
        url: routes.loginPath(),
        body: user,
      }),
    }),
    signup: builder.mutation({
      query: ({ username, password }) => ({
        method: 'POST',
        url: routes.signup,
        body: { username, password },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
} = authApi;