KS.RootRouter = Backbone.Router.extend({

  initialize: function (options){

    this.$rootEl = options.$rootEl
  },


  _swapView: function(view) {
    this._current && this._current.remove()
    this._current = view;
    this.$rootEl.html(view.render().$el)
  },

  _headerFooter: function(body) {
    this._get_current_user()
    this.body = body
    var view = new KS.Views.HeadFoot({
      body: this.body,
      currentUser: this.currentUser
    });

    this._swapView(view)
  },

  _get_current_user: function () {
      this.currentUser = this.currentUser || new KS.Models.CurrentUser()
      this.currentUser.fetch()
      return this.currentUser
  }

});