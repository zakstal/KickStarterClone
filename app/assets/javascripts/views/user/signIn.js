KS.Views.SignIn = Backbone.View.extend({
  template: JST['signin'],

  className: 'signin-container',

  events: {
    "click .submit": "signIn",
    "click #guest": 'signInAsGuest'
  },

  initialize: function () {
    this.rendered = false
  },

  render: function () {
    var renderedSignup = this.template({
      error: this.errors
    });

    this.$el.html(renderedSignup);

    this.signInSlideDown();

    return this;
  },

  signIn: function (events) {
    events.preventDefault();

    this.rendered = true;
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
  },

  signInAsGuest: function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/api/session",
      data: { 'body': {'user': { 'email': 'user@user.com', 'password': 'password'}}},
      success: function (resp) {
        console.log("sent")
        Backbone.history.navigate("", { trigger: true })
      }
    });

  },

  signInSlideDown: function () {

    if (!this.rendered){
      setTimeout(function() {
        this.$('#div-border').toggleClass('border-div-hidden')
        this.$('#div-border').toggleClass('border-div')
      },200)
    } else {
      this.$('#div-border').css('top', 0)
    }

  }
});
