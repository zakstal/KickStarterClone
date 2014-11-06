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
    this.currentUser = options.currentUser

    this.listenTo(this.project, "sync", this.render)
  },

  events: {
    "click #basic-info-new-project"   : "renderBasicInfo",
    "click #reward-info-new-project"  : "rewards",
    "click #story-info-new-project"   : "story",
    "click #about-info-new-project"   : "aboutYou",
    "click #new-reward"               : "addReward",
    "click .submit-title-form"        : "saveProjectTitle"
  },

  render: function () {
    if ( typeof this.project.get('id') === 'undefined') {
      var newProject = this.getTitlePage();
    } else {

      var newProject = this.menuNewProjectTemplate();
    }
    this.$el.html(newProject);

    this.addAndRenderSubView();

    return this;

  },


  renderBasicInfo: function () {
    var basicInfoTemplate = new KS.Views.ProjectPartialBasic({
      project: this.project,
      projectView: this
    });

    this.addAndRenderSubView(basicInfoTemplate.render().$el);
  },



  saveProjectTitle: function (event) {
    event.preventDefault();
    var that = this
    var attr = this.$('.title-form').serializeJSON();

    this.project.save(attr, {
      success: function () {
        that.currentUser().backedProjects.add(that.project)
      }
    });
  },


  rewards: function (event) {
    if (event) {
      event.preventDefault();
    }
    var newProjectTemplate = new KS.Views.ProjectPartialReward({
      project: this.project,
      projectView: this
    });

    this.addAndRenderSubView(newProjectTemplate.render().$el);
  },

  addReward: function (event) {
    event.preventDefault();
    var newProjectTemplate = new KS.Views.ProjectPartialReward({
      project: this.project,
      projectView: this
    });

    this.$('.project-body').append(newProjectTemplate.render().$el)
  },

  story: function (event) {
    if (event) {
     event.preventDefault();
    }

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
    if (typeof subview === 'undefined' ) {

      if (typeof this.currentTemplate === 'undefined') {
        this.renderBasicInfo()
      }
    } else {
      if ( !(subview === this.currentTemplate)) {
        this.currentTemplate && this.currentTemplate.remove();
        this.currentTemplate = subview
      }
    }

    if ( !(subview === this.currentTemplate)) {
      console.log("in add and render subview 3")
      this.$('.project-body').html(this.currentTemplate)
    }
  },


});
