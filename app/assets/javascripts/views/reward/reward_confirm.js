KS.Views.RewardConfirm = Backbone.View.extend({

  confirmTemplate: JST['reward/confirm'],

  initialize: function (options) {
    this.reward = options.reward
    this.listenTo(this.reward, "sync", this.render)
  },

  events: {
    "click .confirm": "confirm"
  },

  render: function () {
    console.log("in reward confirm render")
    var renderConfirm = this.confirmTemplate({ reward: this.reward });

    this.$el.html(renderConfirm);

    return this;
  },

  confirm: function (event) {
    event.preventDefault();
    var form = this.$('.confirm-reward-form')

    console.log(form, "form")
    var attr = form.serializeJSON();

    console.log("in confirm", attr)

    var claimed = new KS.Models.ClaimedReward();

    var that = this;
    claimed.save(attr, {
      success: function () {
        console.log("claim saved")
        this.$('.confirm-window').removeClass('hidden')
      }
    });

  }


})
