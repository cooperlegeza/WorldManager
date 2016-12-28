package worldManager

import grails.rest.*
import grails.converters.*

class CampaignsController {

    def index() {
        def json = Campaign.list()
        render json
    }

    def campaign(){
        def json = Campaign.findByTitle(params.title) as JSON
        render json
    }
}
