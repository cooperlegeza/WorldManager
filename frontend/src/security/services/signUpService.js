export default function SignUp($http) {
    'ngInject';

    function signUp(newUser) {
        $http({
            url:"/createAccount",
            method: "POST",
            data: newUser,
        }).then(

        );
    }

    return ({signUp})
}