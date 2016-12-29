import angular from 'angular'
import uiRouter from 'angular-ui-router';
import worldsController from './worlds/worldsController';
import routesConfig from './router-config.js';
import CampaignService from './campaigns/campaignDataFactoryService';
import campaignsController from './campaigns/campaignsController';

const worldManagerApp = angular.module('worldManagerApp', [
    uiRouter,
]).controller('worldsController', worldsController)
    .controller('campaignController', campaignsController)
    .factory('CampaignService', CampaignService)
    .config(routesConfig);

export default worldManagerApp.name;
