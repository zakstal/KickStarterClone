window.KS = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new KS.Routers.UserRoute({
      $rootEl: $('main')
    });
    Backbone.history.start()
  }
};

$(document).ready(function(){
  KS.initialize();
});
