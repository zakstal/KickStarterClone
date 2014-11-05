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

      var attr = this.$('.title-form').serializeJSON();
      this.project.save(attr, {
        error: function (error) {
          console.log(error, attr)
        }
      });
    }
  },
