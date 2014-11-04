KS.Routers.ProjectRoute = KS.RootRouter.extend({

  routes: {
    //new before :id
    "project/new": "new",
    "project/:id": "show"
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
    console.log("in new")
    var newProject = new KS.Views.ProjectNew()

    this._swapView(newProject)
  }
});
