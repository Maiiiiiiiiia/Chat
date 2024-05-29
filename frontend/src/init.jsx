import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Provider as ReduxProvider } from 'react-redux';
import resources from './locales';
import App from './App';
import store from './slices';
import SocketContext from './contexts/SocketContext';
import { io } from 'socket.io-client';
import filter from 'leo-profanity';

const rollbarConfig = {
  accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
  environment: 'production',
};

const init = async () => {

  const defaultLanguage = 'ru';

  const i18n = i18next.createInstance();
  await i18n.init({
    lng: defaultLanguage,
    resources,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
  filter.add(filter.getDictionary('ru'));

  const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';
  const socket = io(URL);

  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <React.StrictMode>
          <I18nextProvider i18n={i18n}>
            <ReduxProvider store={store}>
              <SocketContext.Provider value={socket}>
                <App />
              </SocketContext.Provider>
            </ReduxProvider>
          </I18nextProvider>
        </React.StrictMode>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default init;
