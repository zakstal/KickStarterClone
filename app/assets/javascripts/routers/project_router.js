KS.Routers.ProjectRoute = KS.RootRouter.extend({

  routes: {
    //new before :id
    "project/new": "new",
    "project/:id": "show",
    "project/:id/edit": "edit",
    "project/reward/:id": "showReward"
  },

  show: function(id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()
    console.log(project, "in show")
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
    console.log("in show reward")

    var reward = new KS.Models.Reward({ id: id})
    reward.fetch()

    console.log(reward.get('project_id'))
    var rewardView = new KS.Views.RewardConfirm({
      reward: reward
    });

    this._swapView(rewardView)
  }
});
