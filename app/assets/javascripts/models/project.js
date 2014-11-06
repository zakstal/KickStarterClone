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
    // console.log(response, "in project model")
    if (response.rewards) {
      this.rewards().set(response.rewards, { parse: true })
      delete response.rewards
    }

    return response
  }
});
