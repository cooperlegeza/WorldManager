import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SecurityController from './securityController';
import SignUp from './services/signUpService';
import LoginModalService from './services/loginModalService';
import LoginService from './services/loginService';

const security = angular.module('security', [
    uiRouter,
]).controller('SecurityController', SecurityController)
    .service('SignUp', SignUp)
    .service('LoginModalService', LoginModalService)
    .service('LoginService', LoginService);

export default security.name;