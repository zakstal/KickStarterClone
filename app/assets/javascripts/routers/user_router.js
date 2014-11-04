KS.Routers.UserRoute = KS.RootRouter.extend({


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

});
