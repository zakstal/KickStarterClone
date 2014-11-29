KS.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  userShowNav: JST['users/user_show_nav'],

  projectBacked: JST['users/backed_project_partial'],

  userComments: JST['users/user_comments'],

  events: {
    "click .project-nav-element": "swichMainViews",
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    console.log(this.model, "user show model")
    var show = this.template({
      user: this.model
    });

    this.$el.html(show);
    this.renderUserShowNav();
    this.renderBackedProjects();
    return this;
  },

  renderUserShowNav: function () {
    console.log("in user nav show");
    this.currentNavId = "backed"
    var navTemplate = this.userShowNav({
      number_of_backers: this.model.get('number_of_backed_projects'),
      number_of_comments: this.model.comments().length
    });

    this.$('.user-show-nav').html(navTemplate);
  },

  swichMainViews: function (event) {
    event.preventDefault();

    var subPage = $(event.currentTarget).attr('id')
    this.swichCssWhenMainViewSwich(subPage);

    if (subPage === "backed") {
      this.renderBackedProjects();
    } else if (subPage === "comments") {
      this.renderUserComments();
    } else if (subPage === "created") {


    } else {
      console.log("none");
    }
  },

  swichCssWhenMainViewSwich: function (newNavId) {
    var nav = this.currentNavId;
    this.currentNavId = newNavId;
    $('#' + nav).removeClass('project-nav-element-active');
    $('#' + newNavId).addClass('project-nav-element-active');

  },

  renderBackedProjects: function () {
    console.log("render backed projects")
      var list = $('<ul class="group"></ul>')
      var that = this

      this.model.backedProjects().forEach( function(project){
        var backedTemplate = that.projectBacked({
          project: project
        });

        list.append(backedTemplate)
      });

      this.$('.user-body-user-show').html(list)
  },

  renderUserComments: function () {
    console.log("render backed projects")
    var list = $('<ul></ul>')
    var that = this

    this.model.comments().forEach( function(comment){
      var commentTemplate = that.userComments({
        comment: comment
      });

      list.append(commentTemplate)
    });

    this.$('.user-body-user-show').html(list)
  },

});
