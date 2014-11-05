KS.Views.ProjectNew = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  menuNewProjectTemplate: JST['projects/new_project_menu'],

  basicInfoTemplate: JST['projects/basic_info'],

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

    this.renderBasicInfo();

    return this;

  },

  renderBasicInfo: function () {

    var basicInfoTemplate = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project
    });

    this.addSubView(basicInfoTemplate);
  },


  basicInfo: function (event) {
    // event.preventDefault();

    var newProjectTemplate = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project
    });

    this.addSubView(newProjectTemplate);
  },

  rewards: function (event) {
    event.preventDefault();

    var newProjectTemplate = new KS.Views.ProjectPartialReward();

    this.addSubView(newProjectTemplate.render().$el);
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
  },

  aboutYou: function (event) {
    event.preventDefault();
    var newProjectTemplate = this.aboutYouTemplate({
    });

    this.addSubView(newProjectTemplate);

  },

  addSubView: function(subview) {
    this.currentTemplate = subview
    this.$('.project-body').html(this.currentTemplate)
  },


});
