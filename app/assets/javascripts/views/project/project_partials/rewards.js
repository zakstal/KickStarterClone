KS.Views.ProjectPartialReward = Backbone.View.extend({

  rewards: JST['projects/rewards'],

  reward: JST['projects/rewards_partial'],

  events: {
    "click #reward-button-save"       : "save",
    "click #new-reward"               : "addNewReward",
    "click .new-project-reward-radio" : "revealQtyToggle",
    "click #save-reward-next"         : "saveAndNext"
  },


  initialize: function (options) {
    this.project = options.project;
    this.projectView = options.projectView;
    this.reward = new KS.Models.Reward();
    this.listenTo(this.project, "sync", this.render);
    // this.listenTo(this.reward, "sync", this.render)
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

     var success = false
     var that = this;
    console.log("in save", this.reward, attr)

    this.reward.save(attr, {
      error: function (error) {
        console.log(error, "there was an error")
      },
      success: function () {
        success = true
        console.log("here", success)
      }
    });

    console.log("here", success)

    return success;
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
    // event.preventDefault();
    var rewardQty = this.$('.new-project-reward-qty')
    console.log(rewardQty, "in reaveal quty")

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
    // if (this.save(event)) {}
      Backbone.history.navigate("project/" + this.project.get("id") + "/story", {trigger: true})

  }

});
