KS.Views.HeadFoot = Backbone.View.extend({
  template: JST['header'],

  initialize: function(options) {
    this.body = options.body
    this.currentUser = KS.currentUser
    this.listenTo(this.currentUser, "sync", this.render)
  },


  render: function () {
    var rendered = this.template();

    this.$el.html(rendered);    //
    // debugger;
    this.$el.append(this.body.render().$el)

    return this
  }
});