import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SecurityController from './controllers/securityController';
import SignUp from './services/signUpService';
import LoginModalService from './services/loginModalService';
import LoginService from './services/loginService';
import LoginController from './controllers/loginController'

const security = angular.module('security', [
    uiRouter,
]).controller('SecurityController', SecurityController)
    .controller('LoginController', LoginController)
    .service('SignUp', SignUp)
    .service('LoginModalService', LoginModalService)
    .service('LoginService', LoginService);

export default security.name;