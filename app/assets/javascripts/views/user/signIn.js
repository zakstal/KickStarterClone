KS.Views.SignIn = Backbone.View.extend({
  template: JST['signin'],

  events: {
    "click #signin": "signIn"
  },

  render: function () {
    var renderedSignup = this.template({
      error: this.errors
    });

    this.$el.html(renderedSignup);
    return this;
  },

  signIn: function (events) {
    events.preventDefault();
    var attr = this.$('form').serializeJSON()
    var that = this;

    $.ajax({
			type: "POST",
			url: "/api/session",
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
