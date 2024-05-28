export default {
    translation: {
    authProvider: {
      mainHeader: 'Hexlet Chat',
      goOut: 'Выйти',
    },
    loginPage: {
      nickname: 'Ваш ник',
      password: 'Пароль',
      logIn: 'Войти',
      footer: {
        text: 'Нет аккаунта?',
        link: 'Регистрация',
      },
      error: 'Неверные имя пользователя или пароль',
    },
    notFound: {
      notFound: 'Страница не найдена',
    },
    signUp: {
      error: {
        nickName: 'Такой пользователь уже существует',
        password: 'Неверные имя пользователя или пароль',
      },
      validationError: {
        usernameMinMax: 'От 3 до 20 символов',
        requiredName: 'Обязательное поле',
        min6: 'Не менее 6 символов',
        requiredPassword: 'Обязательное поле',
        confirmPassword: 'Пароли должны совпадать',
        requiredConfirmPassword: 'Обязательное поле',
      },
      form: {
        registration: 'Регистрация',
        nickname: 'Имя пользователя',
        password: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
        login: 'Зарегистрироваться',
      },
    },
    channels: {
      title: 'Каналы',
      button: {
        delete: 'Удалить',
        rename: 'Переименовать',
        plus: '+',
      },
    },
    messages: {
      messagesCounter: {
        messages_Nol: ' сообщений',
        messages_one: ' сообщение',
        messages_few: ' сообщения',
        messages_many: ' сообщений',
      },
      putYourMessages: 'Введите сообщение...',
      newMessages: 'Новое сообщение',
    },
    modals: {
      addChannel: 'Добавить канал',
      channelName: 'Имя канала',
      cancel: 'Отменить',
      send: 'Отправить',
      obligatoryField: 'Обязательное поле',
      numberCharacters: 'От 3 до 20 символов',
      mustUnique: 'Должно быть уникальным',
      deleteChannel: 'Удалить канал',
      sure: 'Уверены?',
      delete: 'Удалить',
      renameChannel: 'Переименовать канал',
      channelManagement: 'Управление каналом',
      error: {
        delete: 'Ошибка при удалении канала:',
        add: 'Ошибка при добавлении канала:',
        rename: 'Ошибка при переименовании канала:',
      },
    },
    toast: {
        success: 'Канал создан',
        remove: 'Канал удалён',
        rename: 'Канал переименован',
        errorNetwork: 'Ошибка соединения',
        errorDelete: 'Ошибка при удалении канала!',
        errorRename: 'Ошибка при переименовании канала!',
      },
  },
};
