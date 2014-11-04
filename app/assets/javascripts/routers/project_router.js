KS.Routers.ProjectRoute = KS.RootRouter.extend({

  routes: {
    //new before :id
    // "user/new": "new",
    "project/:id": "show"
  },

  show: function(id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()
    var showBody = new KS.Views.ProjectShow({
      project: project
    });

    this._headerFooter(showBody);
  }
});
