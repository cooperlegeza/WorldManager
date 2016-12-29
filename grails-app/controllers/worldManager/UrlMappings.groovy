package worldManager

class UrlMappings {
  static mappings = {

    "/campaignsList"(controller: "CampaignsController", action:"list")

    "/"(view: '/staticPages/index')
    "500"(view: '/application/serverError')
    "404"(view: '/application/notFound')
  }
}
