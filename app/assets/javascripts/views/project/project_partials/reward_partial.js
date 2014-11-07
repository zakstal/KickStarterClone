KS.Views.ProjectPartialRewardPartial = Backbone.View.extend({



  rewards: JST['projects/rewards_partial'],

  events: {
    "click #reward-button-save"       : "save",
    "click #new-reward"               : "addNewReward",
    "click .new-project-reward-radio" : "revealQtyToggle",
    "click #save-reward-next"         : "saveAndNext"
  },


  initialize: function (options) {
    this.project = options.project,
    this.projectView = options.projectView
    this.listenTo(this.project, "sync", this.render)
  },

  render: function () {
    console.log(this.project, "in render")
    var rendered = this.rewards({
      project: this.project
    })

    this.$el.html(rendered);

    return this;
  },

  save: function (event) {

    event.preventDefault();
    var attr = this.$('.project-reward-form').serializeJSON();

    if (typeof this.reward === 'undefined') {
      this.reward = new KS.Models.Reward()
    }

    var saved = false
    console.log("in save", this.reward, attr)
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
    event.preventDefault();

      this.save(event);


  $(event.currentTarget).empty();

    var newProjectTemplate = new KS.Views.ProjectPartialRewardPartial({
      project: this.project,
      projectView: this
    });

    this.$('.project-body').append(newProjectTemplate.render().$el)

  },

  revealQtyToggle: function (event) {
    event.preventDefault();
    var rewardQty = this.$('.new-project-reward-qty')
    var isHidden = rewardQty.hasClass('hidden')
    if (isHidden) {
      rewardQty.removeClass('hidden')
    } else {
      rewardQty.addClass('hidden')
    }
  },

  saveAndNext: function (event) {
    console.log("in save and next")
    event.preventDefault();
    this.save(event, {
      success: function (resp) {
        console.log("in success partial")
          Backbone.history.navigate("project/" + resp.get('id') + "/story", {trigger: true})
      }
    });

  }

});
