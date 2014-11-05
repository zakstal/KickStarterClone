KS.Views.ProjectPartialReward = Backbone.View.extend({

  rewards: JST['projects/rewards'],

  events: {
    "click #reward-button-save" : "save",
    "click" : "wind"
  },

  render: function () {
    console.log("in reward partial render")
    var rendered = this.rewards({ reward: this.model })

    this.$el.html(rendered);
    console.log(this.$('#reward-button-save'))
    return this;
  },

  save: function (event) {

    event.preventDefault();
    console.log("in partial rewards")
    var attr = this.$('.project-reward-form').serializeJSON();

    console.log(attr)
  },

  addNewReward: function (event) {
    console.log('in add new reward')
    event.preventDefault();

    this.save(event);

    event.empty();

  },

  wind: function (event) {
      console.log(event, "windy")
  }
});
