window.KS = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var $main = $('main');
    var $body = $('.main-body')
    new KS.Routers.UserRoute({
      $rootEl: $main,
      $rootBody: $body
    });

    new KS.Routers.ProjectRoute({
      $rootEl: $main,
      $rootBody: $body
    });

    new KS.Routers.CatagoryRoute({
      $rootEl: $main,
      $rootBody: $body
    });

    Backbone.history.start()
  }
};
