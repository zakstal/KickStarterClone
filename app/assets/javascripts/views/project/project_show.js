KS.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/projectshow'],

  mainTemplate: JST['projects/project_body_main'],

  userPartialTemplate: JST['projects/user_partial'],

  projectBackers: JST['projects/project_body_backed_users'],

  projectComments: JST['projects/project_body_comments'],

  projectCommentForm: JST['projects/project_body_comments_form'],

  projectNav: JST['projects/project_show_nav'],

  contactModal: JST['modals/projectshow/contact'],

  events: {
    "click .project-nav-element"              : "swichMainViews",
    "click #post-comment"                     : "postComment",
    "click .contact-userblurb-project-show"   : "contactOpen",
    "click .close-modal"                      : "toggleModal",
    "click #contact-send"                     : "sendContact",
    "click .play-container"                   : "playVideo"
  },


  initialize: function(options){
    this.project = options.project
    this.played = true;
    this.listenTo(this.project, "sync", this.render)
    this.listenTo(this.project.comments(), "add", this.renderCommentsMainView)
  },

  render: function () {
    console.log(this.project.comments(), "in show")
    var template = this.template({
      project: this.project
    });

    this.$el.html(template);
    this.renderMainView();
    this.renderProjectNav();
    this.renderRewards();
    this.renderUser();
    return this;
  },

  renderProjectNav: function () {
    this.currentNavId = "home"
    var navTemplate = this.projectNav({
      number_of_backers: this.project.escape('number_of_backers'),
      number_of_comments: this.project.comments().length
    });

    this.$('.project-nav').html(navTemplate);
  },

  renderMainView: function () {
      var mainTemplate = this.mainTemplate({
        project: this.project,
        story: this.project.story().attributes.story,
        challenges: this.project.story().attributes.challenges
      });

      this.$('.project-body').html(mainTemplate);
  },

  renderBackingUsers: function () {
    if (typeof this.project.get('backers') !== 'undefined') {
      var list = $('<ul></ul>')
      var that = this

      this.project.get('backers').forEach( function(backer){
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
      console.log("none");
    }
  },

  swichCssWhenMainViewSwich: function (newNavId) {
    var nav = this.currentNavId;
    this.currentNavId = newNavId;
    $('#' + nav).removeClass('project-nav-element-active');
    $('#' + newNavId).addClass('project-nav-element-active');

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
    var backers = this.project.get('backers')
    if (typeof backers !== 'undefined') {
      backers.forEach( function(user){
        if (user.id = KS.currentUserId) {
          isOrIsNot = true;
        }
      });
    }

    return isOrIsNot;
  },

  postComment: function (event) {
    event.preventDefault();
    var attr = $('.make-comment-form').serializeJSON();

    var newComment = new KS.Models.Comment();
    var that = this;

    newComment.save(attr, {
      success: function (resp) {

        newComment.fetch({
          success: function () {
            that.project.comments().add(newComment);
            that.renderProjectNav();
            that.swichCssWhenMainViewSwich("comments")
          }
        });
      }
    });

  },

  toggleModal: function () {
    this.$('.modal-space').toggleClass('hidden')
    this.$('.modal-center-spacer').html();
  },

  contactOpen: function (event) {
    event.preventDefault();
    console.log("in contact");
    this.toggleModal();
    this.renderContactModal();
  },

  renderContactModal: function () {
    var contactModal = this.contactModal({
      project: this.project
    });

    this.$('.modal-center-spacer').html(contactModal);
  },

  sendContact: function (event) {
    event.preventDefault();
    this.toggleModal();

    var attr = this.$('.contact-form').serializeJSON();

    var message = new KS.Models.Message();

    message.save(attr, {
      success: function () {
        console.log('saved')
      }
    });
    console.log(attr, "in send comment")
  },

  playVideo: function (event) {
    var vcode = "-FHay-Lj0MA";
    if (this.played) {
      this.$(".project-picture-container").append('<iframe id="user-video-play" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
      this.played = false;
    }
    event.preventDefault();
    this.$('.play-container').toggleClass('hidden');
    this.$('.user-video-image').toggleClass('hidden');
    this.$('.play').toggleClass('hidden');
    this.$('.play-container').off();
  }


});
