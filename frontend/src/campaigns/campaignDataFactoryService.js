function CampaignService($q){
    'ngInject';

    function list(){
        return $q.when({

        });
    }

    return {
        list,
    };
}

export default CampaignService