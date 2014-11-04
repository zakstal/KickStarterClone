KS.Collections.Projects = Backbone.Collection.extend({
  url: "api/projects",

  model: KS.Models.Project

  getOrFetch: function (id) {
    var projects = this

    var project
    if (project = project.get(id)) {
      project.fetch()
    } else {
      var project = new KS.Models.Project({ id: id })

      project.fetch({
        success: function () {
          projects.add(project)
        }
      });
    }
    return project
  }

});
