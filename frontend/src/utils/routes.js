const apiPath = '/api/v1';

// http://localhost:3000/api/v1/login 

export default {
  loginPath: () => [apiPath, 'login'].join('/'),
  channels: () => [apiPath, 'channels'].join('/'),
  messages: () => [apiPath, 'messages'].join('/'),

  usersPath: () => [apiPath, 'data'].join('/'),
};
