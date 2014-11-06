KS.Views.RewardSubShow = Backbone.View.extend({

  template: JST['projects/reward'],

  nameTag: 'div',

  className: "reward-project",

  initialize: function (options) {
    this.reward = options.reward
    this.listenTo(this.reward, "sync", this.render)
  },
  render: function () {
    var rendered = this.template({ reward: this.reward });

    this.$el.html(rendered)

    return this;
  }

});
