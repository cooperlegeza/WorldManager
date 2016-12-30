package worldManager

class UrlMappings {
  static mappings = {
    "/login"(controller: "LoginController", action:"login")
    "/campaignsList"(controller: "CampaignsController", action:"list")
    "/createAccount"(controller: "AccountCreator", action:"newAccount")

    "/"(view: '/staticPages/index')
    "500"(view: '/application/serverError')
    "404"(view: '/application/notFound')
  }
}
