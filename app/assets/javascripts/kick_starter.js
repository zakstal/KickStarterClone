window.KS = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var $main = $('main');
    new KS.Routers.UserRoute({
      $rootEl: $main
    });

    new KS.Routers.ProjectRoute({
      $rootEl: $main
    });

    Backbone.history.start()
  }
};

$(document).ready(function(){
  KS.initialize();
});
