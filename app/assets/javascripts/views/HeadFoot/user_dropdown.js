KS.Views.Dropdown = Backbone.View.extend({

  projectThumbNail: JST['headfoot/dropdown/project_thumbnail'],

  dropdownTemplate: JST['headfoot/dropdown/dropdown'],

  signedOutTemplate: JST['headfoot/signed_out'],

  signedInTemplate: JST['headfoot/signed_in'],


  events: {
    "click .user-tab": "toggleDropDown",
    "click .sign-Out": "signOut"
  },

  //close dropdown is in header.js under closeDropdown event

  initialize: function () {
    this.projects = this.model.projects()
    this.backedProjects = this.model.backedProjects()
    this.listenTo(this.projects, "add", this.render)
    this.listenTo(this.backedProjects, "add", this.render)
  },

  render: function () {
    if (typeof KS.currentUserId === 'undefined') {

      var signedOut = this.signedOutTemplate()
      this.$el.html(signedOut)
    } else  {

      var signedIn = this.signedInTemplate()
      var dropdown = this.dropdownTemplate({ user: this.model })

      this.$el.html(signedIn);
      this.$el.append(dropdown)
      this.renderProjectList(this.projects)

      this.renderBackedProjectList(this.backedProjects)

    }

    return this;
  },

  renderProjectList: function (projectType) {
    var that = this
    if ( typeof projectType !== 'undefined') {
      if (projectType.length !== 0) {
        projectType.each(function (project) {
          var projectThumb = that.projectThumbNail({
            project: project
          });

          that.$('.user-projects-in-dropdown').append(projectThumb)
        });
        this.$('.user-projects-in-dropdown').prepend('<h4>Created Projects</h4>')
      }
    }
  },

  renderBackedProjectList: function (projectType) {
    var that = this
    if ( typeof projectType !== 'undefined') {
      if (projectType.length !== 0) {
        projectType.each(function (project) {
          console.log("this project", project)
          var projectThumb = that.projectThumbNail({
            project: project
          });

          that.$('.backed-projects-in-dropdown').append(projectThumb)
        });
        this.$('.backed-projects-in-dropdown').prepend('<h4>Backed Projects</h4>')
      }
    }
  },


  toggleDropDown: function(event) {

    var dropDown = $('.dropdown-container');
      if (dropDown.hasClass('hidden')){

        dropDown.removeClass('hidden')
      } else {

        dropDown.addClass('hidden')
      }
  },



  signOut: function (event) {
    this.model = nil
  }
});
