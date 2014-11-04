KS.Routers.UserRoute = KS.RootRouter.extend({


  routes: {
    ""              : "index",
    "user/new"      : "new",
    "user/:id"      : "show",
    "user/:id/edit" : "edit"
  },

  index: function () {
    console.log("here")
  },

  new: function () {
    var showSignUp = new KS.Views.SignUp();
    this._swapView(showSignUp);
  },

  show: function () {
    var showBody = new KS.Views.UserShow({ model: this._getCurrentUserInfo() });
    this._swapView(showBody);
  },

  edit: function() {
    var showBody = new KS.Views.UserEdit({ model: this._getCurrentUserInfo() });
    this._swapView(showBody);
  }

});
