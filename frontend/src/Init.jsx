import React from 'react';
import App from './App'
import { Provider } from 'react-redux';
import store from './slices';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetMessagesQuery } from './slices/messagesSlice';
// import { useGetChannelsQuery } from './slices/channelsSlice';
import socket from './socket';


// Если для запросов вы используете rtk query (что очень рекомендуется), 
// то при срабатывании события лучше делать это не через отдельный экшен, а через updateQueryData (https://redux-toolkit.js.org/rtk-query/usage/manual-cache-updates)

// В файле инита нужно инициализировать экземпляр сокета, в подключение к событиям уже делать в нужных компонентах 

// socket.on('newMessage', (payload) => {
//   slices.dispatch(messagesActions.addMessage(payload));
// });
// socket.on('newChannel', (payload) => {
//   slices.dispatch(channelsActions.addChannel(payload));
// });
// socket.on('removeChannel', (payload) => {
//   slices.dispatch(channelsActions.removeChannel(payload));
// });
// socket.on('renameChannel', (payload) => {
//   slices.dispatch(channelsActions.renameChannel(payload));
// });


const Init = async () => {
  const { refetch: refetchMessages } = useGetMessagesQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      dispatch({ type: 'addMessage', payload: newMessage });
      refetchMessages();
    };
    socket.on('newMessage', handleNewMessage);
    return () => {
      socket.off('newMessage');
      socket.off('newChannel');
    };
  }, [refetchMessages, dispatch]);

  // const socket = io();
  // const dispatch = useDispatch();

  // socket.on('newMessage', (payload) => {
  //   socket.send('Hello Server!');
  //   dispatch(addMessages(payload));
  // });

  // const dispatch = useDispatch();
  // const { refetch: refetchMessages } = useGetMessagesQuery();
  // const { refetch: refetchChannels } = useGetChannelsQuery();
  // useEffect(() => {
  //   const handleNewMessage = (newMessage) => {
  //     dispatch({ type: 'addMessage', payload: newMessage });
  //     refetchMessages();
  //   };
  //   const handleNewChannel = (channel) => {
  //     dispatch({ type: 'addChannel', payload: channel });
  //     refetchChannels();
  //   };
  //   socket.on('newMessage', handleNewMessage);
  //   socket.on('newChannel', handleNewChannel);

  //   return () => {
  //     socket.off('newMessage');
  //     socket.off('newChannel');
  //   };
  // }, [refetchMessages, refetchChannels, dispatch]);
return (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


};

export { Init, socket };
