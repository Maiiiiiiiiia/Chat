import React from 'react';
import App from './App'
import { Provider } from 'react-redux';
import store from './slices';
import i18next from 'i18next';
import resources from './locales';
import { I18nextProvider } from 'react-i18next';

const Init = async () => {
  const defaultLanguage = 'ru';

  const i18n = i18next.createInstance();
  await i18n.init({
    lng: defaultLanguage,
    resources,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  })

return (
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)


};

export default Init;


// Если для запросов вы используете rtk query (что очень рекомендуется), 
// то при срабатывании события лучше делать это не через отдельный экшен, а через updateQueryData (https://redux-toolkit.js.org/rtk-query/usage/manual-cache-updates)

// В файле инита нужно инициализировать экземпляр сокета, а подключение к событиям уже делать в нужных компонентах 

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

// export const SocketContext = React.createContext();

  // const socket = io()

  // const { refetch: refetchMessages } = useGetMessagesQuery();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const handleNewMessage = (newMessage) => {
  //     console.log('socket')
  //     dispatch({ type: 'addMessage', payload: newMessage });
  //     refetchMessages();
  //   };
  //   socket.on('newMessage', handleNewMessage);

  //   return () => {
  //     socket.off('newMessage');
  //     // socket.off('newChannel');
  //   };
  // }, [refetchMessages, dispatch]);


  // const socket = io();
  // const dispatch = useDispatch();

  // socket.on('newMessage', (payload) => {
  //   socket.send('Hello Server!');
  //   dispatch(addMessages(payload));
  // });