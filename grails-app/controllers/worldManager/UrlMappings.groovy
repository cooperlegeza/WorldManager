package worldManager

class UrlMappings {
  static mappings = {

    "/"(view: '/staticPages/index')
    "500"(view: '/application/serverError')
    "404"(view: '/application/notFound')
  }
}
