import angular from 'angular';
import 'angular-mocks';
import worldManagerApp from '../../src/world-manager-app';
import security from '../../src/security/security';

const {inject, module} = angular.mock;

describe('SignUpService', ()=> {
    let $httpBackend;
    let successHandler;
    let errorHandler;
    let SignUpService;

    beforeEach(function() {
        module(worldManagerApp);
        module(security);

    });

    beforeEach(inject((_$httpBackend_, _SignUpService_) => {
        $httpBackend = _$httpBackend_;
        SignUpService = _SignUpService_;

        successHandler = jasmine.createSpy('successHandler');
        errorHandler = jasmine.createSpy('errorHandler');
    }));

    it('should exist', () => {
        expect(SignUpService).toBeDefined();
    });

});