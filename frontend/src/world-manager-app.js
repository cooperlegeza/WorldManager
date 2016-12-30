import angular from 'angular'
import uiRouter from 'angular-ui-router';
import worldsController from './worlds/worldsController';
import routesConfig from './router-config.js';
import CampaignService from './campaigns/campaignDataFactoryService';
import campaignsController from './campaigns/campaignsController';
import security from './security/security';
import angularLock from 'angular-lock';

const worldManagerApp = angular.module('worldManagerApp', [
    uiRouter,
    security,
    angularLock, angular-jwt
]).controller('worldsController', worldsController)
    .controller('campaignsController', campaignsController)
    .factory('CampaignService', CampaignService)
    .config(routesConfig)
    .run(function($rootScope, lock, authService) {
            $rootScope.authService = authService;
            authService.registerAuthenticationListener();
            lock.interceptHash();
    });
export default worldManagerApp.name;
