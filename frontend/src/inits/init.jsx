
// const init = async () => {
//     const i18n = i18next.createInstance();
//     const store = setupStore();
//     injectStore(store);

//     await i18n.use(initReactI18next).init( {
//         resourses,
//         failbackLng: 'ru',
//     });
// };
import { io } from 'socket.io-client';

const init = async () => {
    const socket = io();

      // locals
//   const i18n = i18next
//   .createInstance();
// await i18n
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .init({
//     resources,
//     fallBackLng: 'ru',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

    return {
        socket,
    };
};

export default init;