window.KS = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var $main = $('main');
    var $body = $('.main-body')
    new KS.RootRouter({
      $rootEl: $main,
      $rootBody: $body
    });

    Backbone.history.start()
  }
};
