KS.Routers.CatagoryRoute = KS.RootRouter.extend({

  routes: {
    "catagory": "index",
    "catagory/:id": "show"
  },

  index: function() {
    var index = new KS.Views.CatagoryIndex();

    this._swapView(index);
  },

  show: function(id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()

    var showBody = new KS.Views.ProjectShow({
      project: project
    });

    this._swapView(showBody);
  },


});
