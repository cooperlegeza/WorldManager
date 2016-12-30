import homeTemplate from './home/home.tpl.html';
import campaignHomeTemplate from './campaigns/templates/campaignHome.tpl.html';
import campaignNewTemplate from './campaigns/templates/campaignNew.tpl.html';
import worldsHomeTemplate from './worlds/worldsHome.tpl.html';
import aboutTemplate from './about/about.tpl.html';
import contactTemplate from './contact/contact.tpl.html';
import loginTemplate from './security/loginMode.tpl.html';

function routesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    lockProvider.init({
        clientID: 'oJZPYy3heXFxvcOmUd3ZuqPz7nrRH1Eg',
        domain: 'cooperlegeza.auth0.com'
    });

    $stateProvider
        .state('home', {
            url: '/',
            template: homeTemplate,
            data: {
                requireLogin: false,
            }
        })
        .state('campaigns', {
            url: "/campaigns",
            template: campaignHomeTemplate,
            controller: 'campaignsController as vm',
            data: {
                requireLogin: false,
            }
        })
        .state('newCampaign', {
            url: "/newCampaign",
            template: campaignNewTemplate,
            data: {
                requireLogin: true,
            }
        })
        .state('campaigns.string', {
            url: "/string",
            template: "BAXTER NO",
            data: {
                requireLogin: true,
            }
        })
        .state('worlds', {
            url: "/worlds",
            template: worldsHomeTemplate,
            controller: 'worldsController as vm',
            data: {
                requireLogin: false,
            }
        })
        .state('about', {
            url: "/about",
            template: aboutTemplate,
            data: {
                requireLogin: false,
            }
        })
        .state('contact', {
            url: "/contact",
            template: contactTemplate,
            data: {
                requireLogin: false,
            }
        })
        .state('login', {
            url:'/login',
            controller: 'loginController as vm',
            template: loginTemplate
        });
}

export default routesConfig;
