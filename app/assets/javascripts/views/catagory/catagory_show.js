KS.Views.CatagoryShow = Backbone.View.extend({

  template: JST['catagory/catagory_show'],

  colors: {
    'technology': '#e45',
    'food':'#f8a',
    'dance': '#abf',
    'design': '#0e8',
    'games': '#3af'
  },

  projectThumbTemplate: JST['catagory/project_thumb'],

  initialize: function (options) {
    this.catagory = options.catagory
    this.listenTo(this.catagory, "sync", this.render)
  },

  render: function () {
    var catagory = this.catagory.get('id')
    var template = this.template({
      cat: catagory,
      color: this.colors[catagory]
    });

    this.$el.html(template);
    this.renderProjects()
    return this;
  },

  renderProjects: function () {
    var that = this;
    console.log(this.catagory.projects(), "projects from cat")
    this.catagory.projects().forEach(function (project) {
        var renderedProject = that.projectThumbTemplate({
          project: project
        });

        that.$('.show-cat-list').append(renderedProject)
    });

  }

});
