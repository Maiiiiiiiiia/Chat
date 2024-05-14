import { configureStore } from '@reduxjs/toolkit';
import { channelsApi } from './channelsSlice';
import { messagesApi } from './messagesSlice';
import appReducers from './appSlice';
import { authApi } from './authSlice';

export default configureStore({
    reducer: {
        app: appReducers,
        [channelsApi.reducerPath]: channelsApi.reducer,
        [messagesApi.reducerPath]: messagesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(channelsApi.middleware, messagesApi.middleware, authApi.middleware),
});

// import { configureStore } from '@reduxjs/toolkit';
// import channelsReducer from './channelsSlice';
// import messagesReducer from './messagesSlice';

// export default configureStore({
//     reducer: {
//         channelsReducer,
//         messagesReducer,
//     },
// });
