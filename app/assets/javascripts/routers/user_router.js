KS.Routers.UserRoute = Backbone.Router.extend({
  initialize: function (options){
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "index"
  },

  index: function () {
    this._headerFooter()
  },

  _swapView: function(view) {
    this._current && this._current.remove()
    this._current = view;
    this.$rootEl.html(view.render().$el)
  },

  _headerFooter: function(body) {
   body = (body === 'undefined' ? new KS.Views.Blank() : body)
    var view = new KS.Views.HeadFoot({
      body: body
    });

    this._swapView(view)
  }


})