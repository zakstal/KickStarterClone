KS.Views.SignUp = Backbone.View.extend({
  template: JST['signup'],

  events: {
    "click #signup": "signUp"
  },

  render: function () {
    var renderedSignup = this.template({
      error: this.errors
    });

    this.$el.html(renderedSignup);
    return this;
  },

  signUp: function (events) {
    events.preventDefault();
    var attr = this.$('form').serializeJSON()

    var that = this;

    $.ajax({
      type: "POST",
      url: "/api/users",
      data: { 'body': attr },
      error: function (resp) {
        console.log("error")
        that.errors = resp.responseText
        that.render()
      },
      success: function (resp) {
        console.log("sent")
        Backbone.history.navigate("", { trigger: true })
      }
    });
  }
})
