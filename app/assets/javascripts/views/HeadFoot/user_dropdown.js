KS.Views.Dropdown = Backbone.View.extend({

  projectThumbNail: JST['headfoot/dropdown/project_thumbnail'],

  dropdownTemplate: JST['headfoot/dropdown/dropdown'],

  signedOutTemplate: JST['headfoot/signed_out'],

  signedInTemplate: JST['headfoot/signed_in'],


  events: {
    "click .user-tab": "toggleDropDown",
    "click": "hideDropdownToNavigate"
  },

  initialize: function () {
    this.projects = this.model.projects()
    this.backedProjects = this.model.backedProjects
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
      this.renderProjectList(this.backedProjects)
    }

    return this;
  },

  renderProjectList: function (projectType) {
    var that = this
    if ( typeof projectType !== 'undefined') {
      projectType.each(function (project) {
        var projectThumb = that.projectThumbNail({
          project: project
        });

        that.$('.user-projects-in-dropdown').append(projectThumb)
      });
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

  hideDropdownToNavigate: function(event) {

    if (!$(event.target).hasClass('user-tab')) {
    var dropDown = $('.dropdown-container');
      if (!dropDown.hasClass('hidden')) {
        dropDown.addClass('hidden')
      }
    }
  }
});
