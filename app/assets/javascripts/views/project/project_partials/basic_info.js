KS.Views.ProjectPartialBasic = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  basicInfoTemplate: JST['projects/basic_info'],

  events: {
    "click #project-button-save": "save",
    "change .my-photo-upload": "handleFile"
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
      success: function (resp) {
        console.log(resp.get('id'), "save project" ),
        // var projId = resp.get('id'),
        Backbone.history.navigate("project/" + resp.get('id') + "/rewards", {trigger: true})
      }
    });
  },

  handleFile: function(event) {

    var file = event.currentTarget.files[0];
    var view = this;
    var reader = new FileReader();
    reader.onload = function(event) {
      view.project.set('pic', this.result);
    }

    reader.readAsDataURL(file);
  }

});
