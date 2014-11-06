KS.Views.Head = Backbone.View.extend({
  header: JST['headfoot/header'],



  initialize: function(options) {
    this.currentUser = options.currentUser
    this.listenTo(this.currentUser, "sync", this.render)
  },


  render: function () {
    var header = this.header({
      currentUser: this.currentUser
    });

    this.$el.html(header);
    this.renderSignedInOut()

    return this;
  },

  renderSignedInOut: function () {
    console.log(this.currentUser, "in render signed in out")
      var signedInTemplate = new KS.Views.Dropdown({
        model: this.currentUser
      })

      var rendered = signedInTemplate.render().$el

      this.$('#signed-in-out').html(rendered)
  },


});
