import angular from 'angular';
import 'angular-mocks';
import worldManagerApp from '../../src/world-manager-app';

const {inject, module} = angular.mock;

describe('worldsController', () => {
   let $state;
   let vm;

   beforeEach(module(worldManagerApp));

   beforeEach(inject((_$state_, $controller) => {
       $state = _$state_;
       spyOn($state, 'go');

       vm = $controller('worldsController', {
           $state,
       });
    }));

   it('should be registered', () => {
       expect(vm).toBeDefined();
   });

   it('should set the ten property', () => {
      expect(vm.ten).toEqual(10);
   });

});