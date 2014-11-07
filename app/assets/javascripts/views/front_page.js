KS.Views.FrontPage = Backbone.View.extend({

  template: JST['front_page'],

  className: 'front-page',
  

  render: function () {
    var template = this.template();

    this.$el.html(template);

    return this;
  }

});
