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
    var story = this.story({ project: this.project });

    this.$el.html(story);

    return this;
  },

  save: function (event) {
    event.preventDefault();

    var attr = this.$('.project-story-form').serializeJSON();

    console.log(attr);
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
