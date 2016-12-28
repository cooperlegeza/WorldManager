import angular from 'angular';
import 'angular-mocks';
import worldManagerApp from '../../src/world-manager-app';

const {inject, module} = angular.mock;

describe('CampaignService', ()=> {
   let $httpBackend;
   let successHandler;
   let errorHandler;
   let CampaignService;

   beforeEach(module(worldManagerApp));

   beforeEach(inject((_$httpBackend_, _CampaignService_) => {
       $httpBackend = _$httpBackend_;
       CampaignService = _CampaignService_;

       successHandler = jasmine.createSpy('successHandler');
       errorHandler = jasmine.createSpy('errorHandler');
   }));

   it('should exist', () => {
      expect(CampaignService).toBeDefined();
   });

});