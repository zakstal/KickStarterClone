KS.Views.CatagoryShow = Backbone.View.extend({

  template: JST['catagory/catagory_show'],

  projectThumbTemplate: JST['catagory/project_thumb'],

  initialize: function (options) {
    this.catagory = options.catagory
    this.listenTo(this.catagory, "sync", this.render)
  },

  render: function () {
    var template = this.template({
      cat: this.catagory.get('id')
    });

    this.$el.html(template);
    this.renderProjects()
    return this;
  },

  renderProjects: function () {
    var that = this;

    this.catagory.projects().forEach(function (project) {
        var renderedProject = that.projectThumbTemplate({
          project: project
        });

        that.$('.show-cat-list').append(renderedProject)
    });

  }

});
