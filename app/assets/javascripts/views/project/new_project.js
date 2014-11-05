KS.Views.ProjectNew = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  menuNewProjectTemplate: JST['projects/new_project_menu'],

  basicInfoTemplate: JST['projects/basic_info'],

  rewardsTemplate: JST['projects/rewards'],

  storyTemplate: JST['projects/story'],

  aboutYouTemplate: JST['projects/about_you'],

  initialize: function (options) {
    this.project = options.project
  },

  events: {
    "click #basic-info-new-project": "basicInfo",
    "click #reward-info-new-project": "rewards",
    "click #story-info-new-project": "story",
    "click #about-info-new-project": "aboutYou"
  },

  render: function () {
    var newProject = this.menuNewProjectTemplate();

    this.$el.html(newProject);

    this.renderSubView();

    return this;

  },

  renderBasicInfo: function () {
    debugger;
    var basicInfoTemplate = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project,
      escapeIf: this.escapeIf
    });

    this.$('.project-body').html(basicInfoTemplate);
    this.renderSubView();
  },


  basicInfo: function (event) {
    // event.preventDefault();

    var newProjectTemplate = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project
    });

    this.addSubView(newProjectTemplate);
    this.renderSubView();
  },

  rewards: function (event) {
    event.preventDefault();

    var newProjectTemplate = this.rewardsTemplate();

    this.addSubView(newProjectTemplate);
    this.renderSubView();
  },

  story: function (event) {
    event.preventDefault();

    var newProjectTemplate = this.storyTemplate();

    this.addSubView(newProjectTemplate);
    this.renderSubView();
  },

  aboutYou: function (event) {
    event.preventDefault();
    var newProjectTemplate = this.aboutYouTemplate();

    this.addSubView(newProjectTemplate);
    this.renderSubView();

  },

  addSubView: function(subview) {
    this.currentTemplate = subview
    this.$('.project-body').html(subview)
  },

  renderSubView: function() {
    if ( typeof this.currentTemplate === 'undefined') {
      this.currentTemplate = this.basicInfoTemplate({
        catagories: this.catagories(),
        project: this.project,
        escapeIf: this.escapeIf
      });
    }
    this.$('.project-body').html(this.currentTemplate)
  },

  escapeIf: function (info) {
    if (typeof info === 'undefined') {
      return ""
    } else {
      return info
    }
  }


});
