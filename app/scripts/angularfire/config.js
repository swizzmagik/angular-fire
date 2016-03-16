angular.module('firebase.config', [])
  .constant('FBURL', 'https://amber-torch-3287.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
