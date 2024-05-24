export default {
    translation: {
        authProvider: {
          mainHeader: 'Hexlet Chat',
          goOut: 'Выйти',
        },
        loginPage: {
          nickname: 'Никнейм',
          password: 'Пароль',
          errorNickname: 'Неверные имя пользователя или пароль',
          logIn: 'Войти',
          footer: {
            text: 'Нет аккаунта?',
            link: 'Регистрация',
          },
          error: 'Неверные имя пользователя или пароль',
        },
        notFound: {
          notFound: 'Page Not Found',
        },
        signUp: {
          error: {
            nickName: 'Пользователь с таким именем уже существует',
            password: 'Неверные имя пользователя или пароль',
          },
          validationError: {
            usernameMinMax: 'Имя должно содержать от 3 до 20 символов',
            requiredName: 'Имя обязательно',
            min6: 'Минимум 6 символов',
            requiredPassword: 'Поле пароль обязательно',
            confirmPassword: 'Пароли должны совпадать',
            requiredConfirmPassword: 'Поле подтверждения пароля обязательно',
          },
          form: {
            registration: 'Регистрация',
            nickname: 'Ваш ник',
            password: 'Пароль',
            confirmPassword: 'Подтвердите пароль',
            login: 'Зарегистрироваться'
          },
        },
        channels: {
          title: 'Каналы',
          button: {
            delete: 'Удалить',
            rename: 'Переименовать',
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
          }
        },
        toast: {
            success: 'Канал создан',
            remove: 'Канал удален',
            rename: 'Канал переименован',
            errorNetwork: 'Ошибка соединения',
            errorDelete: 'Ошибка при удалении канала!',
            errorRename: 'Ошибка при переименовании канала!',
          },
    }
}