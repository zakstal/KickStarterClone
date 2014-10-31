KS.Views.HeadFoot = Backbone.View.extend({
  template: JST['header'],

  initialize: function(options) {
    this.body = options.body
  },
  render: function () {
    var rendered = this.template();

    this.$el.html(rendered);
    this.$el.append(this.body)

    return this
  }
});