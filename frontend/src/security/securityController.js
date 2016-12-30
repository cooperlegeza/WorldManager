import LoginService from './services/loginService.js';

export default function SecurityController($scope){
    'ngInject';

    const vm = this;

    vm.cancel = $scope.$dismiss;

    vm.submit = function(username, password) {
        LoginService.login(username, password).then(function (user) {
            $scope.$close(user);
        });
    };
}