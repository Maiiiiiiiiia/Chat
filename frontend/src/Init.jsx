import React from 'react';
import App from './App'
import i18next from 'i18next';
import resources from './locales';
import { I18nextProvider } from 'react-i18next';
import { Provider, ErrorBoundary } from '@rollbar/react';

const rollbar = {
  accessToken: 'abf309b37ded4f969622c4528b67fb36',  // Замените на ваш токен доступа
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
  <React.StrictMode>
    <Provider config={rollbar}>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <App />      
        </I18nextProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
)
};

export default Init;
