KS.Views.UserShow = Backbone.View.extend({

  template: JST[''],

  render: function () {
    var show = this.tempalate({
      user: this.model
    });

    this.$el.html(show);

    return this;
  }
});