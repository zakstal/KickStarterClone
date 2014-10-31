KS.Routers.UserRoute = Backbone.Router.extend({

  initialize: function (options){
    KS.currentUser = new KS.Models.User()
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "index",
    //new before :id
    "user/new": "new",
    "user/show": "show"
  },

  index: function () {
    var body = new KS.Views.Blank()
    this._headerFooter(body)
  },

  new: function () {
    var showSignUp = new KS.Views.SignUp()
    this._headerFooter(showSignUp);
  },

  show: function () {
    var showBody = new KS.Views.UserShow({ model: KS.currentUser })
    this._headerFooter(showBody);
  },

  _swapView: function(view) {
    this._current && this._current.remove()
    this._current = view;
    this.$rootEl.html(view.render().$el)
  },

  _headerFooter: function(body) {
    this.body = body
    var view = new KS.Views.HeadFoot({
      body: this.body
    });

    this._swapView(view)
  }


});