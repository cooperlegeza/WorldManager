import angular from 'angular'
import uiRouter from 'angular-ui-router';
import worldsController from './worlds/worldsController';
import routesConfig from './router-config.js';

const worldManagerApp = angular.module('worldManagerApp', [
    uiRouter,
]).controller('worldsController', worldsController)
    .config(routesConfig);

export default worldManagerApp.name;
