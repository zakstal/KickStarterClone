KS.Views.ProjectNew = Backbone.View.extend({

  menuNewProjectTemplate: JST['projects/new_project_menu'],

  basicInfoTemplate: JST['projects/basic_info'],

  render: function () {
    var newProject = this.menuNewProjectTemplate();

    this.$el.html(newProject);

    this.renderBasicInfo();

    return this;

  },

  renderBasicInfo: function () {

    var basicInfoTemplate = this.basicInfoTemplate({
      catagories: this.catagories()
    });

    this.projectBody = this.$('.project-body')

    this.$('.project-body').html(basicInfoTemplate);
  },

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },


});
