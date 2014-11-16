KS.Views.ProjectPartialStory = Backbone.View.extend({

  story: JST['projects/story'],

  events: {
    "click .save-story-next" : "save",
    "change .my-photo-upload": "handleFile"
  },

  initialize: function (options) {
    this.project = options.project
    this.listenTo(this.project, "sync", this.render)
  },

  render: function () {
    console.log(this.project.story(),"story")
    var story = this.story({
      project: this.project,
      story: this.project.story()
      });

    this.$el.html(story);

    return this;
  },

  save: function (event) {
    event.preventDefault();

    var attr = this.$('.project-story-form').serializeJSON();
    var navigate = function () {
      Backbone.history.navigate("/project/" + KS.currentUserId + "/about", { trigger: true })
    }
    // if (this.project.story) {
      if (this.project.story().isNew()) {
        console.log("in update")
        this.project.story().save(attr, {
          patch: true,
          // success: navigate
          success: function () {
            this.render
          }
        });
      } else {
        console.log("in save")
        this.project.story().save(attr, {
          // success: navigate
          success: function () {
            console.log("success")
            this.render
          },

          error: function() {
            console.log("error")
          }
        });
      }


  },

  handleFile: function(event) {

    var file = event.currentTarget.files[0];
    var view = this;
    var reader = new FileReader();
    reader.onload = function(event) {
      view.model.set('pic', this.result);
    }

    reader.readAsDataURL(file);
  }

});
