import { configureStore } from '@reduxjs/toolkit';
import { channelsApi } from './channelsSlice';
import { messagesApi } from './messagesSlice';
import appReducers from './appSlice';
import { authApi } from './authSlice';
import modalReducers from './modalSlice';

export default configureStore({
  reducer: {
    app: appReducers,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    modal: modalReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(channelsApi.middleware, messagesApi.middleware, authApi.middleware),
});
