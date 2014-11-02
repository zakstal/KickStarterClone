KS.Routers.UserRoute = Backbone.Router.extend({

  initialize: function (options){

    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "index",
    //new before :id
    "user/new": "new",
    "user/show": "show"
  },

  index: function () {
    this._get_current_user()
    var body = new KS.Views.Blank()
    this._headerFooter(body)
  },

  new: function () {
    var showSignUp = new KS.Views.SignUp()
    this._headerFooter(showSignUp);
  },

  show: function () {
    var showBody = new KS.Views.UserShow({ model: this.currentUser })
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
      body: this.body,
      currentUser: this.currentUser
    });

    this._swapView(view)
  },

  _get_current_user: function () {
    this.currentUser = new KS.Models.CurrentUser()
   this.currentUser.fetch()
  }


});