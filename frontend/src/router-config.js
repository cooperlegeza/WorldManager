import homeTemplate from './home/home.tpl.html';
import campaignHomeTemplate from './campaigns/templates/campaignHome.tpl.html';
import campaignNewTemplate from './campaigns/templates/campaignNew.tpl.html';
import worldsHomeTemplate from './worlds/worldsHome.tpl.html';
import aboutTemplate from './about/about.tpl.html';
import contactTemplate from './contact/contact.tpl.html';

function routesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: homeTemplate,
        })
        .state('campaigns', {
            url: "/campaigns",
            template: campaignHomeTemplate,
            controller: 'campaignsController as vm',
        })
        .state('campaigns.new', {
            url: "/new",
            template: campaignNewTemplate,
        })
        .state('worlds', {
            url: "/worlds",
            template: worldsHomeTemplate,
            controller: 'worldsController as vm',
        })
        .state('about', {
            url: "/about",
            template: aboutTemplate,
        })
        .state('contact', {
            url: "/contact",
            template: contactTemplate,
        });
}

export default routesConfig;
