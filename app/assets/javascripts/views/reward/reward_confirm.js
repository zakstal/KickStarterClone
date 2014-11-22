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
    if( typeof KS.currentUserId === 'undefined') {
      //navigate to new session in rails
      Backbone.history.navigate("session/new", { trigger: true })
    } else {
      var form = this.$('.confirm-reward-form')

      var attr = form.serializeJSON();


      var claimed = new KS.Models.ClaimedReward();
      var that = this;
      claimed.save(attr, {
        success: function (resp) {


          var newBackedProject = new KS.Models.Project({id: that.reward.get('project_id')})
          newBackedProject.fetch({
            success: function () {
                that.currentUser.backedProjects().add(newBackedProject)
            }
          })

          this.$('.confirm-window').addClass('show-confirm-window')
        }
      });
    }
  }


})
