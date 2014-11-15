KS.Models.Project = Backbone.Model.extend({
  urlRoot: 'api/projects',

  rewards: function() {
    if(!this._rewards){
      this._rewards = new KS.Collections.Rewards([],{
        project: this
      });
    }
    return this._rewards
  },

  story: function () {
    if(!this._story) {
      this._story = new KS.Models.Story({
        project: this
      });
    }
    return this._story
  },

  parse: function(response) {

    // console.log(response, "in project model")
    if (response.rewards) {
      this.rewards().set(response.rewards, { parse: true });
      delete response.rewards
    }

    if (response.story) {
      this.story().set(response.story, { parse: true });
      delete response.story
    }

    return response
  }
});
