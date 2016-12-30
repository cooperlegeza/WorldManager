export default function LoginService($http) {
    'ngInject';

    function signUp(user) {
        $http({
            url:"/createAccount",
            method: "POST",
            data: user,
        }).then(
            function success(response) {
                return response.data
            }
        )
    }

    return ({signUp})
}