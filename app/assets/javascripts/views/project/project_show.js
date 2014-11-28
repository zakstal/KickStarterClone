KS.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/projectshow'],

  mainTemplate: JST['projects/project_body_main'],

  userPartialTemplate: JST['projects/user_partial'],

  projectBackers: JST['projects/project_body_backed_users'],

  projectComments: JST['projects/project_body_comments'],

  projectCommentForm: JST['projects/project_body_comments_form'],

  events: {
    "click .project-nav-element": "swichMainViews",
    "click #post-comment"       : "postComment"
  },

  initialize: function(options){
    this.project = options.project
    this.currentNavId = "home"
    this.listenTo(this.project, "sync", this.render)
    this.listenTo(this.project.comments(), "add", this.renderCommentsMainView)
  },

  render: function () {
    console.log(this.project.comments().first(), "in show")
    var template = this.template({
      project: this.project
    });

    this.$el.html(template);
    this.renderMainView();
    this.renderRewards();
    this.renderUser();
    return this;
  },

  renderMainView: function () {

      var mainTemplate = this.mainTemplate({
        project: this.project,
        story: this.project.story().attributes.story,
        challenges: this.project.story().attributes.challenges
      })
      this.$('.project-body').html(mainTemplate)
  },

  renderBackingUsers: function () {
    if (typeof this.project.get('backers') !== 'undefined') {
      var list = $('<ul></ul>')
      var that = this

      this.project.get('backers').forEach( function(backer){
        console.log(backer.that_url, "backer")
        var backingUsersTemplate = that.projectBackers({
          user: backer
        });

        list.append(backingUsersTemplate)
      });

      this.$('.project-body').html(list)
    }
  },

  renderRewards: function () {
    var appendRewards = this.$el.find('.rewards-in-project');
    var that = this

    this.project.rewards().forEach(function (reward){
      // var rewardTemplate = that.rewardsTemplate({ reward: reward })
        var rewardTemplate = new KS.Views.RewardSubShow({ reward: reward })
      appendRewards.append(rewardTemplate.render().$el)

    });

  },

  renderUser: function () {
    var userPartialTemplate = this.userPartialTemplate({
      project: this.project
    });

    this.$el.find('.user-blurb-in-project').html(userPartialTemplate)
  },

  swichMainViews: function (event) {
    event.preventDefault();
    var subPage = $(event.currentTarget).attr('id')
    this.swichCssWhenMainViewSwich(subPage);

    if (subPage === "home") {
      this.renderMainView();
    } else if (subPage === "backers") {
      this.renderBackingUsers();

    } else if (subPage === "comments") {
      this.renderCommentsMainView();

    } else {
      console.log("none")
    }
  },

  swichCssWhenMainViewSwich: function (newNavId) {
    console.log('in swich')
    var nav = this.currentNavId;
    console.log($('#' + nav),'in swich')
    this.currentNavId = newNavId;
    $('#' + nav).removeClass('project-nav-element-active')
    $('#' + newNavId).addClass('project-nav-element-active')
  },

  renderCommentsMainView: function () {
      var list = $('<ul></ul>')
      var that = this

      if(this.isCurrentUserABacker()) {
        var renderForm = this.projectCommentForm({
          project_id: this.project.get('id')
        });

        list.prepend(renderForm)
      }

      this.project.comments().forEach( function(user){
        console.log(user, "indi user")
        var commentsTemplate = that.projectComments({
          user: user
        });

        list.append(commentsTemplate);
      });

      this.$('.project-body').html(list);
  },

  isCurrentUserABacker: function () {
    var isOrIsNot = false;
    var that = this;
    this.project.comments().forEach( function(user){
      if (user.id = KS.currentUserId) {
        isOrIsNot = true;
      }
    });
    return isOrIsNot;
  },

  postComment: function (event) {
    event.preventDefault();
    console.log("inpost comment")
    var attr = $('.make-comment-form').serializeJSON()

    var newComment = new KS.Models.Comment();
    var that = this
    newComment.save(attr, {
      success: function (resp) {
        newComment.fetch({
          success: function () {
            console.log(newComment, "new comment")
            that.project.comments().add(newComment)
          }
        });
      }
    })

  }


});
