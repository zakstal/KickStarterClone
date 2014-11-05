KS.Views.ProjectPartialBasic = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  basicInfoTemplate: JST['projects/basic_info'],

  events: {
    "click #project-button-save": "save",
  },


  initialize: function (options) {
    this.project = options.project
    this.projectView = options.projectView
    console.log(this.projectView, "project view in basic info")
    this.listenTo(this.project, "sync", this.render)
  },

  render: function () {
    var rendered = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project
    });

    this.$el.html(rendered);

    return this;
  },

  save: function (event) {
    event.preventDefault();
    console.log("inhere")
    var attr = this.$('.start-project-form').serializeJSON();
    var that = this
    this.project.save(attr, {
      error: function (error) {
        console.log(error, attr)
      },
      success: function () {
        that.projectView.rewards(false)
        console.log("project Updated")
      }
    });
  },
});
