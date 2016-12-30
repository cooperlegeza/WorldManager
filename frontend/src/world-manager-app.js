import angular from 'angular'
import uiRouter from 'angular-ui-router';
import worldsController from './worlds/worldsController';
import routesConfig from './router-config.js';
import CampaignService from './campaigns/campaignDataFactoryService';
import campaignsController from './campaigns/campaignsController';
import security from './security/security';
import LoginModal from './security/services/loginModalService';

const worldManagerApp = angular.module('worldManagerApp', [
    uiRouter,
    security,
]).controller('worldsController', worldsController)
    .controller('campaignsController', campaignsController)
    .factory('CampaignService', CampaignService)
    .config(routesConfig)
    .run(function($rootScope, $state){
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams){
            let requireLogin = toState.data.requireLogin;

            if(requireLogin && typeof $rootScope.currentUser == 'undefined'){
                event.preventDefault();

                LoginModal
                    .then(function (){
                        return $state.go(toState.name, toParams);
                    })
                    .catch(function(){
                        return $state.go('home');
                    })
            }
        });
    });

export default worldManagerApp.name;
