import React from 'react';
import App from './App'
import i18next from 'i18next';
import resources from './locales';
import { I18nextProvider } from 'react-i18next';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './slices';

const rollbarConfig = {
  accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
  // accessToken: '1dd6d719ec4e4f02b0985a5766f0077f',
  environment: 'production'
};

// RollbarProvider({rollbarConfig}).addEventHandler('error', function(err) {
//   console.log('Rollbar error:', err);
// });


// rollbarConfig.error('Test error for Rollbar integration');
console.log(rollbarConfig);

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
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <React.StrictMode>
          <I18nextProvider i18n={i18n}>
          <ReduxProvider store={store}>
              <App />      
            </ReduxProvider>
          </I18nextProvider>
        </React.StrictMode>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default Init;

