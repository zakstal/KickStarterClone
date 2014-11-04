KS.Views.UserEdit = Backbone.View.extend({

  template: JST['users/edit'],

  events: {
    "click .submit": "updateProfile"
  },

  render: function () {
    console.log(this.model)
    var show = this.template({
      user: this.model
    });

    this.$el.html(show);

    return this;
  },

  updateProfile: function (event) {
    event.preventDefault();
    console.log('here')


    var attr = this.$('.update-user-settings-form').serializeJSON();

    console.log(attr)
  }
});