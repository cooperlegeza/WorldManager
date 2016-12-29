function CampaignService($http){
    'ngInject';

    function list(){

        let campaigns = {};

        $http.get({
            url: "/campaignsList",
            method: "GET",
        }).success(function(data) {
            campaigns = data;
        });

        return campaigns;
    }

    return {
        list,
    };
}

export default CampaignService