KS.Views.ProjectNew = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  menuNewProjectTemplate: JST['projects/new_project_menu'],


  getTitlePage: JST['projects/get_title_page'],

  initialize: function (options) {
    this.project = options.project
    this.currentUser = options.currentUser

    this.listenTo(this.project, "sync", this.render)
    this.listenTo(this.currentUser, "sync", this.render)
  },

  events: {
    "click .submit-title-form"        : "saveProjectTitle"
  },

  render: function () {
      var newProject = this.getTitlePage();

    this.$el.html(newProject);

    this.$('.project-body').html(newProject)

    return this;

  },


  saveProjectTitle: function (event) {
    event.preventDefault();
    var that = this
    var attr = this.$('.title-form').serializeJSON();
    console.log(attr,"attr")
    this.project.save(attr, {
      success: function (resp) {
        console.log(resp.get('id'), "save project" ),
        // var projId = resp.get('id'),
        Backbone.history.navigate("project/" + resp.get('id') + "/basic", {trigger: true})
      },
      error: function (resp) {
        console.log(resp, "in error")
      }
    });
  },



});
