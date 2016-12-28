import homeTemplate from './home/home.tpl.html';
import campaignHomeTemplate from './campaigns/campaignHome.tpl.html';
import worldsHomeTemplate from './worlds/worldsHome.tpl.html';
import aboutTemplate from './about/about.tpl.html';

function routesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: homeTemplate,
        })
        .state('campaigns', {
            url: "/campaigns",
            template: campaignHomeTemplate,
        })
        .state('worlds', {
            url: "/worlds",
            template: worldsHomeTemplate,
        })
        .state('about', {
            url: "/about",
            template: aboutTemplate,
        })
        .state('contact', {
            url: "/contact",
        })
        .state('potato', {
            url: "/potato",
        });
}

export default routesConfig;
