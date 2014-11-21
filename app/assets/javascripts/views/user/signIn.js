KS.Views.SignIn = Backbone.View.extend({
  template: JST['signin'],

  events: {
    "click #signin": "signIn"
  },

  render: function () {
    var renderedSignup = this.template();

    this.$el.html(renderedSignup);
    return this;
  },

  signIn: function (events) {
    events.preventDefault();
    var attr = this.$('form').serializeJSON()
    console.log(attr)
    console.log('here')

    $.ajax({
			type: "GET",
			url: "/api/sessions/new",
			data: { 'body':attr },
			success: function (resp) {
				console.log("sent", resp)
			}
    });
  }
})
