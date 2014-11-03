KS.Views.HeadFoot = Backbone.View.extend({
  template: JST['headfoot/header'],
  signedOutTemplate: JST['headfoot/signed_out'],


  initialize: function(options) {
    this.body = options.body
    this.currentUser = options.currentUser
    this.listenTo(this.currentUser, "sync", this.render)
  },


  render: function () {
    var rendered = this.template({
      currentUser: this.currentUser
    });


    this.$el.html(rendered);
    this.renderSignedInOut()
    this.$el.append(this.body.render().$el)

    return this
  },

  renderSignedInOut: function () {
    if (typeof this.currentUser.attributes.user === 'undefined'){

      var rendered = this.signedOutTemplate()
    } else {
      var signedInTemplate = new KS.Views.Dropdown({
        model: this.currentUser
      })
      var rendered = signedInTemplate.render().$el
    }
     this.$('#signed-in-out').html(rendered)
  },



});


