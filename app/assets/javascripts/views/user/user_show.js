KS.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  render: function () {

    var show = this.template({
      user: this.model
    });

    this.$el.html(show);

    return this;
  }
});