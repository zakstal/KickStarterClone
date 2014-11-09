KS.Views.UserEdit = Backbone.View.extend({

  template: JST['users/edit'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    console.log(this.model, "user edit")
  },

  events: {
    "click .submit": "updateProfile",
    "change .my-photo-upload": "handleFile"
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

    this.model.save(attr, {
      success: function (resp) {
        console.log(resp, "response")
        this.render
      }
    });
  },

  handleFile: function(event) {

    var file = event.currentTarget.files[0];
    var view = this;
    var reader = new FileReader();
    reader.onload = function(event) {
      view.model.set('pic', this.result);
    }

    reader.readAsDataURL(file);
  }
});
