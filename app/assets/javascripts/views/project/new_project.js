KS.Views.ProjectNew = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  menuNewProjectTemplate: JST['projects/new_project_menu'],

  basicInfoTemplate: JST['projects/basic_info'],

  storyTemplate: JST['projects/story'],

  aboutYouTemplate: JST['projects/about_you'],

  getTitlePage: JST['projects/get_title_page'],

  initialize: function (options) {
    this.project = options.project

    this.listenTo(this.project, "sync", this.render)
    console.log(this.project, "in new project")
  },

  events: {
    "click #basic-info-new-project"   : "basicInfo",
    "click #reward-info-new-project"  : "rewards",
    "click #story-info-new-project"   : "story",
    "click #about-info-new-project"   : "aboutYou",
    "click #new-reward"               : "addReward",
    "click .submit-title-form"        : "saveProject"
  },

  render: function () {
    if ( typeof this.project.get('id') === 'undefined') {
      var newProject = this.getTitlePage();
    } else {

      var newProject = this.menuNewProjectTemplate();
    }
    this.$el.html(newProject);

    this.renderBasicInfo();

    return this;

  },


  renderBasicInfo: function () {
    var basicInfoTemplate = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project
    });

    this.addAndRenderSubView();
  },



  saveProject: function (event) {
    event.preventDefault();

    var attr = this.$('.title-form').serializeJSON();
    this.project.save(attr, {
      error: function (error) {
        console.log(error, attr)
      }
    });
  },


  basicInfo: function (event) {
    // event.preventDefault();
    var newProjectTemplate = this.basicInfoTemplate({
      catagories: this.catagories(),
      project: this.project
    });

    this.addAndRenderSubView(newProjectTemplate);
  },

  rewards: function (event) {
    event.preventDefault();
    var newProjectTemplate = new KS.Views.ProjectPartialReward({
      project: this.project
    });

    this.addAndRenderSubView(newProjectTemplate.render().$el);
  },

  addReward: function (event) {
    event.preventDefault();
    var newProjectTemplate = new KS.Views.ProjectPartialReward({
      project: this.project
    });

    this.$('.project-body').append(newProjectTemplate.render().$el)
  },

  story: function (event) {
    event.preventDefault();
    var newProjectTemplate = this.storyTemplate({
      project: this.project
    });

    this.addAndRenderSubView(newProjectTemplate);
  },

  aboutYou: function (event) {
    event.preventDefault();
    var newProjectTemplate = this.aboutYouTemplate({
    });

    this.addAndRenderSubView(newProjectTemplate);

  },

  addAndRenderSubView: function(subview) {
    if (typeof subview === 'undefined'){
      this.basicInfo()
    } else {
      this.currentTemplate = subview
      this.$('.project-body').html(this.currentTemplate)
    }
  },


});
