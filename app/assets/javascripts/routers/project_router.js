KS.Routers.ProjectRoute = KS.RootRouter.extend({

  routes: {
    //new before :id
    "project/new": "new",
    "project/:id": "show",
    "project/:id/edit": "edit",
    "project/reward/:id": "showReward",
    "project/:id/basic": "basicNew",
    "project/:id/rewards": "rewardsNew",
    "project/:id/story": "storyNew"
  },

  show: function(id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()

    var showBody = new KS.Views.ProjectShow({
      project: project
    });

    this._swapView(showBody);
  },

  new: function () {
    console.log(this.currentUser(),"in new")
    var emptyProject = new KS.Models.Project()
    var newProject = new KS.Views.ProjectNew({
      project: emptyProject,
      currentUser: this.currentUser
    });

    this._swapView(newProject)
  },

  edit: function (id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()

    var newProject = new KS.Views.ProjectNew({ project: project })

    this._swapView(newProject)
  },

  showReward: function(id) {
    this.currentUser = this._getCurrentUserInfo
    console.log("in show reward")

    var reward = new KS.Models.Reward({ id: id})
    reward.fetch()

    console.log(reward.get('project_id'))
    var rewardView = new KS.Views.RewardConfirm({
      reward: reward
    });

    this._swapView(rewardView)
  },

  basicNew: function (id) {
    console.log(id, "in basic")


    var project = new KS.Models.Project({ id: id })
    project.fetch()

    var basic = new KS.Views.ProjectPartialBasic({
      project: project
    });

    this._swapView(basic)
  },

  rewardsNew: function (id) {
    console.log(id, "in rewards")


    var project = new KS.Models.Project({ id: id })
    project.fetch()
    console.log(project, "in rewards")
    var basic = new KS.Views.ProjectPartialReward({
      project: project
    });

    this._swapView(basic)
  },

  storyNew: function (id) {
    console.log(id, "in story")


    var project = new KS.Models.Project({ id: id })
    project.fetch()

    console.log(project, "in story")
    var basic = new KS.Views.ProjectPartialStory({
      project: project
    });

    this._swapView(basic)
  }


});
