KS.Views.Dropdown = Backbone.View.extend({
  template: JST['headfoot/dropdown/dropdown'],
  signedInTemplate: JST['headfoot/dropdown/signed_in'],

  //backed projects template
  //user projects template

  render: function () {
    var rendered = this.signedInTemplate()
    var dropdown = this.template({ user: this.model })

    this.$el.html(rendered);
    this.$el.append(dropdown)
    this.renderProjectList()
    // this.renderBackedProjectList()


    return this;
  },

  renderProjectList: function () {
    console.log("projects")
    var project = new KS.Views.ProjectThumnailList({
      collection: this.model.projects()
    });
    this.$('.backed-projects-in-dropdown').html(project.render().$el)
  },

  renderBackedProjectList: function () {
    var backedList = new KS.Views.ProjectThumnailList({
      collection: this.model.backedProjects
    });
    this.$('.user-projects-in-dropdown').html(backedList.render().$el)
  }
});