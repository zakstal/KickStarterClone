KS.Models.Reward = Backbone.Model.extend({
  urlRoot: 'api/rewards',

  parse: function(response) {
    console.log('in reward model', response)
    if (response.reward){
      this.set(response.reward, { parse: true })
      delete response.reward
    }

    return response;
  }

});
