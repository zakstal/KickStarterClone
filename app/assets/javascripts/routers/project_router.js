KS.Routers.ProjectRoute = KS.RootRouter.extend({

  routes: {
    //new before :id
    "project/:id": "show"
  },

  show: function(id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()
    console.log(project)
    var showBody = new KS.Views.ProjectShow({
      project: project
    });

    this._swapView(showBody);
  }
});
