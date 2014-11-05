KS.Views.ProjectPartialAbout = Backbone.View.extend({

  rewards: JST['projects/rewards'],

  events: {
    "click .reward-bottom" : "save",
    "click .new-reward"    : "addNewReward"
  },

  render: function () {
    var rendered = this.rewards({ reward: this.model })

  },

  save: function (event) {
    event.preventDefault();

    var attr = this.$('.project-reward-form').serializeJSON();

    console.log(attr)
  },

  addNewReward: function (event) {
    event.preventDefault();

    this.save(event);

    event.empty();

  }
});
