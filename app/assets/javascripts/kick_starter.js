window.KS = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    KS.projects = new KS.Collections.Projects();
    var $main = $('main');
    var $body = $('.main-body')
    new KS.RootRouter({
      $rootEl: $main,
      $rootBody: $body
    });

    Backbone.history.start()
  }
};
