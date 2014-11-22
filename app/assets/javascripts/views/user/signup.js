KS.Views.SignUp = Backbone.View.extend({
  template: JST['signup'],

  className: 'signin-container',

  events: {
    "click .submit": "signUp"
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
  },


  signInSlideDown: function () {

    if (!this.rendered){
      setTimeout(function() {
        this.$('#div-border').toggleClass('border-div-hidden')
        this.$('#div-border').toggleClass('border-div')
      },500)
    } else {
      this.$('#div-border').css('top', 0)
    }

  }
})
