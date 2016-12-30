import angular from 'angular';
import 'angular-mocks';
import worldManagerApp from '../../src/world-manager-app';
import security from '../../src/security/security';

const {inject, module} = angular.mock;

describe('SecurityController', () => {
    let $state;
    let vm;

    beforeEach(module(worldManagerApp));
    beforeEach(module(security));

    beforeEach(inject((_$state_, $controller) => {
        $state = _$state_;
        spyOn($state, 'go');

        vm = $controller('SecurityController', {
        });
    }));

    it('should be registered', () => {
        expect(vm).toBeDefined();
    });

});