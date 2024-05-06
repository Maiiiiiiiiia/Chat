const apiPath = '/api/v1';

// http://localhost:3000/api/v1/login 

export default {
  loginPath: () => [apiPath, 'login'].join('/'),
  // usersPath: () => [apiPath, 'data'].join('/'),
};
