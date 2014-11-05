KS.Views.ProjectPartialReward = Backbone.View.extend({

  rewards: JST['projects/rewards'],

  events: {
    "click #reward-button-save"       : "save",
    "click #new-reward"               : "addNewReward",
    "click .new-project-reward-radio" : "revealQtyToggle"
  },


  initialize: function (options) {
    this.project = options.project
  },

  render: function () {
    var rendered = this.rewards({
      reward: this.model,
      project: this.project
    })

    this.$el.html(rendered);

    return this;
  },

  save: function (event) {

    event.preventDefault();
    console.log("in partial rewards")
    var attr = this.$('.project-reward-form').serializeJSON();

    if (typeof this.reward === 'undefined') {
      this.reward = new KS.Models.Reward()
    }

    var saved = false

    if (saved) {
      this.reward.save(attr, {
        error: function (error) {
          console.log(error, "there was an error")
        },
        success: function () {
          saved = true
        }
      });
    }
  },

  addNewReward: function (event) {
    console.log('in add new reward')
    event.preventDefault();

      this.save(event);


    $(event.currentTarget).empty();

  },

  revealQtyToggle: function (event) {
    event.preventDefault();
    var rewardQty = this.$('.new-project-reward-qty')
    var isHidden = rewardQty.hasClass('hidden')
    console.log(rewardQty, isHidden, "in toggel reward")
    if (isHidden) {
      rewardQty.removeClass('hidden')
    } else {
      rewardQty.addClass('hidden')
    }
  }

});
