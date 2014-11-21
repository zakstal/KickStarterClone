KS.RootRouter = Backbone.Router.extend({

  initialize: function (options){

    this.$rootEl = options.$rootEl
    this.$rootBody = options.$rootBody

    this._getCurrentUserInfo

    var view = new KS.Views.Head({
        currentUser: this._getCurrentUserInfo()
    });
    console.log("after initailze of head",this.currentUser)
    this.$rootEl.html(view.render().$el)
  },


  _swapView: function(view) {
    this._current && this._current.remove()
    this._current = view;
    this.$rootBody.html(view.render().$el)
  },


  _getCurrentUserInfo: function () {
    if (typeof this.currentUser === 'undefined') {
      console.log('is undefined')

      var currentUser = new KS.Models.CurrentUser()
      currentUser.fetch({
        success: function (){
          if ( typeof currentUser.get('id') !== 'undefined') {

            KS.currentUserId = currentUser.get('id')
          }
        }
      });

        this.currentUser = currentUser
    }

    return this.currentUser
  }

});
