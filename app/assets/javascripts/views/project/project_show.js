KS.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/projectshow'],

  mainTemplate: JST['projects/project_body_main'],
  // rewardsTemplate: JST['projects/reward'],

  userPartialTemplate: JST['projects/user_partial'],

  projectBackers: JST['projects/project_body_backed_users'],

  events: {
    "click .project-nav-element": "swichMainViews"
  },

  initialize: function(options){
    this.project = options.project
    this.currentNavId = "home"
    this.listenTo(this.project, "sync", this.render)

  },

  render: function () {
    console.log(this.project.get('backers'), "in show")
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
  }


});
