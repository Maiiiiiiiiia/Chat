import React from 'react';
import App from './App'
import i18next from 'i18next';
import resources from './locales';
import { I18nextProvider } from 'react-i18next';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
// import AuthProvider from './components/AuthProvider';
// import { Provider } from 'react-redux';
import { Provider as ReduxProvider } from 'react-redux';
import store from './slices';

const rollbar = {
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  environment: 'production'
};

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
    <RollbarProvider config={rollbar}>
      <ErrorBoundary>
        <React.StrictMode>
          <I18nextProvider i18n={i18n}>
          <ReduxProvider store={store}>
            {/* <AuthProvider> */}
              <App />      
            {/* </AuthProvider> */}
            </ReduxProvider>
          </I18nextProvider>
        </React.StrictMode>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default Init;

