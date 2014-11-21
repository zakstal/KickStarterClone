KS.Views.Head = Backbone.View.extend({
  header: JST['headfoot/header'],


  events: {
    "click": "closeDropdown"
  },


  initialize: function(options) {
    this.currentUser = options.currentUser
    this.listenTo(this.currentUser, "sync", this.render)

  },


  render: function () {
    // console.log('in header render', this.currentUser)
    var header = this.header({
      currentUser: this.currentUser
    });

    this.$el.html(header);
    this.renderSignedInOut()

    return this;
  },

  renderSignedInOut: function () {
      var signedInTemplate = new KS.Views.Dropdown({
        model: this.currentUser
      })
      var rendered = signedInTemplate.render().$el

      this.$('#signed-in-out').html(rendered)
  },

  closeDropdown: function (event) {
      var dropDown = $('.dropdown-container');
      if (!$(event.target).hasClass('user-tab')){
        if (!dropDown.hasClass('hidden')) {
          dropDown.addClass('hidden')
        }
      }

  }


});
