KS.Views.ProjectPartialStory = Backbone.View.extend({

  story: JST['projects/stroy'],

  events: {
    "click .save-story-next" : "save"
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

});
