KS.Routers.ProjectRoute = KS.RootRouter.extend({

  routes: {
    //new before :id
    "project/new": "new",
    "project/:id": "show",
    "project/:id/edit": "edit"
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
    var emptyProject = new KS.Models.Project()
    var newProject = new KS.Views.ProjectNew({ project: emptyProject })

    this._swapView(newProject)
  },

  edit: function (id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()
    
    var newProject = new KS.Views.ProjectNew({ project: project })

    this._swapView(newProject)
  }
});
