KS.Views.SignUp = Backbone.View.extend({
  template: JST['signup'],

  events: {
    "click #signup": "signUp"
  },

  render: function () {
    var renderedSignup = this.template();

    this.$el.html(renderedSignup);
    return this;
  },

  signUp: function (events) {
    events.preventDefault();
    var attr = this.$('form').serializeJSON()
    debugger;
    console.log(attr)
    console.log('here')
  }
})