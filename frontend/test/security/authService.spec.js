import angular from 'angular';
import 'angular-mocks';
import worldManagerApp from '../../src/world-manager-app';
import security from '../../src/security/security';

const {inject, module} = angular.mock;

describe('AuthenticationService', ()=> {
    let $httpBackend;
    let successHandler;
    let errorHandler;
    let AuthenticationService;
    let $rootScope;
    let Base64;


    beforeEach(function(){
        module(worldManagerApp);
        module(security);


        module(function($provide) {
            $provide.service('AuthenticationService', AuthenticationService)
        });

        inject(function($injector) {
            AuthenticationService = $injector.get('AuthenticationService');
        });
    });

    beforeEach(inject((_$httpBackend_, _$rootScope_,  _AuthenticationService_, _Base64_) => {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        AuthenticationService = _AuthenticationService_;
        Base64 = _Base64_;

        successHandler = jasmine.createSpy('successHandler');
        errorHandler = jasmine.createSpy('errorHandler');
    }));

    it('should exist', () => {
        expect(AuthenticationService).toBeDefined();
    });

    it('should set credentials with the given username and password', () => {
        let username = 'user';
        let password = 'password';

        AuthenticationService.setCredentials(username, password);

        expect($rootScope.globals.currentUser.username).toEqual(username);
    })


});