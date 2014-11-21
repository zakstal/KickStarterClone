KS.Views.RewardConfirm = Backbone.View.extend({

  confirmTemplate: JST['reward/confirm'],

  initialize: function (options) {
    this.reward = options.reward
    this.currentUser = options.currentUser
    this.listenTo(this.reward, "sync", this.render)
  },

  events: {
    "click .confirm": "confirm"
  },

  render: function () {
    console.log("in reward confirm render")
    var renderConfirm = this.confirmTemplate({ reward: this.reward });

    this.$el.html(renderConfirm);

    return this;
  },

  confirm: function (event) {
    event.preventDefault();
    console.log(this.currentUser)
    if( typeof KS.currentUserId === 'undefined') {
      //navigate to new session in rails
      Backbone.history.navigate("session/new", { trigger: true })
    } else {
      var form = this.$('.confirm-reward-form')

      var attr = form.serializeJSON();


      var claimed = new KS.Models.ClaimedReward();
      console.log(attr, "attributes", KS.currentUserId)
      var that = this;
      claimed.save(attr, {
        success: function (resp) {
          console.log("claim saved")


          var newBackedProject = new KS.Models.Project({id: that.reward.get('project_id')})
          newBackedProject.fetch()

          console.log("legnth before",that.currentUser.backedProjects().length)
          var projects = that.currentUser.backedProjects()
          projects.add(newBackedProject)
          console.log("legnth after",that.currentUser.backedProjects().length, projects)
          this.$('.confirm-window').addClass('show-confirm-window')
        }
      });
    }
  }


})
