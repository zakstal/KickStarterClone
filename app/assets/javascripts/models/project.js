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

  parse: function(response) {
    if (response.project){
      this.set(response.project, { parse: true })
      delete response.user
    }

    if (response.rewards) {
      this.rewards().set(response.rewards, { parse: true })
      delete response.rewards
    }

    return response
  }
});