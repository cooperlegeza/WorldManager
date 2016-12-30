export default function LoginService(lock, authManager) {
    'ngInject';

    function login() {
        lock.show();
    }

    function registerAuthenticationListener() {
        lock.on('authenticated', function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            authManager.authenticate();
        });
    }

    function logout() {
        localStorage.removeItem('id_token');
        authManager.unauthenticate();
    }

    return {
        login: login,
        registerAuthenticationListener: registerAuthenticationListener,
        logout: logout,
    }
}