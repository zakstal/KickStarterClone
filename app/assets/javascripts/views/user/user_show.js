KS.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    console.log(this.model)
    var show = this.template({
      user: this.model
    });

    this.$el.html(show);

    return this;
  }
});
