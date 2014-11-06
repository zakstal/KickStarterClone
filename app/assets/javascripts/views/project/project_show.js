KS.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/projectshow'],
  //
  // rewardsTemplate: JST['projects/reward'],

  userPartialTemplate: JST['projects/user_partial'],

  initialize: function(options){
    this.project = options.project
    this.listenTo(this.project, "sync", this.render)

  },

  render: function () {
    console.log(this.project, "in show")
    var template = this.template({ project: this.project });

    this.$el.html(template);

    this.renderRewards()
    this.renderUser()
    return this;
  },

  renderRewards: function () {
    var appendRewards = this.$el.find('.rewards-in-project');
    var that = this

    this.project.rewards().forEach(function (reward){
      // var rewardTemplate = that.rewardsTemplate({ reward: reward })
        var rewardTemplate = new KS.Views.RewardSubShow({ reward: reward })
      appendRewards.append(rewardTemplate.render().$el)

    });

  },

  renderUser: function () {
    var userPartialTemplate = this.userPartialTemplate({
      project: this.project
    });

    this.$el.find('.user-blurb-in-project').html(userPartialTemplate)
  }
});
