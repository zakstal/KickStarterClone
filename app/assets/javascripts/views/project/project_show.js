KS.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/projectshow'],

  rewardsTemplate: JST['projects/reward'],

  userPartialTemplate: JST['projects/user_partial'],

  initialize: function(options){
    this.project = options.project

  },

  render: function () {
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

      var rewardTemplate = that.rewardsTemplate({ reward: reward })
      appendRewards.append(rewardTemplate)

    });

  },

  renderUser: function () {
    var userPartialTemplate = this.userPartialTemplate({
      project: this.project
    });

    this.$el.find('.user-blurb-in-project').html(userPartialTemplate)
  }
});