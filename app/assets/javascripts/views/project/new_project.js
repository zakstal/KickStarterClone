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
    this.listenTo(this.project, "sync", this.render)
  },

  events: {
    "click #basic-info-new-project"   : "basicInfo",
    "click #reward-info-new-project"  : "rewards",
    "click #story-info-new-project"   : "story",
    "click #about-info-new-project"   : "aboutYou",
    "click #new-reward"               : "addReward"
  },

  render: function () {
    var newProject = this.menuNewProjectTemplate();

    this.$el.html(newProject);

    this.renderSubView();

    return this;

  },

  renderBasicInfo: function () {

    console.log(this.project, "here")
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
    console.log(this.project)
    var newProjectTemplate = this.rewardsTemplate();

    this.addSubView(newProjectTemplate);
    this.renderSubView();
  },

  addReward: function (event) {
    event.preventDefault();

    var newProjectTemplate = this.rewardsTemplate();
    this.$('.project-body').append(newProjectTemplate)
  },

  story: function (event) {
    event.preventDefault();

    var newProjectTemplate = this.storyTemplate({
      project: this.project
    });

    this.addSubView(newProjectTemplate);
    this.renderSubView();
  },

  aboutYou: function (event) {
    event.preventDefault();
    var newProjectTemplate = this.aboutYouTemplate({
      project: this.project
    });

    this.addSubView(newProjectTemplate);
    this.renderSubView();

  },

  addSubView: function(subview) {
    this.currentTemplate = subview
    this.$('.project-body').html(subview)
  },

  renderSubView: function() {
    console.log(this.project, "here")
    if ( typeof this.currentTemplate === 'undefined') {
      this.currentTemplate = this.basicInfoTemplate({
        catagories: this.catagories(),
        project: this.project
      });
    }
    this.$('.project-body').html(this.currentTemplate)
  }


});
