KS.Views.Head = Backbone.View.extend({
  header: JST['headfoot/header'],

  events: {
    "click .title": "navigateIndex",
    "click .discover": "navDiscover",
    "click .start": "navStart"
  },

  initialize: function(options) {
    this.currentUser = options.currentUser
    this.listenTo(this.currentUser, "sync", this.render)
  },


  render: function () {
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

  navigateIndex: function(event) {
    Backbone.history.navigate("", {trigger: true })
  },

  navDiscover: function(event) {
    Backbone.history.navigate("", {trigger: true })
  },

  navStart: function(event) {
    Backbone.history.navigate("/project/new", {trigger: true })
  },

});
