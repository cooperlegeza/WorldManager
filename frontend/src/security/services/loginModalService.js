export default function LoginModalService($modal, $rootScope) {
    function assignCurrentUser(user){
        $rootScope.currentUser = user;
        return user;
    }

    return function(){
        let instance = $modal.open({
           template: '../loginMode.tpl.html',
            controller: 'securityController'
        });

        return instance.result.then(assignCurrentUser);
    }
}