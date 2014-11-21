KS.Models.Story = Backbone.Model.extend({
  urlRoot: 'api/stories',

  parse: function(response) {
    console.log(response, "story response")
    if(response.story) {
      this.set(response.story, { parse: true })
      delete response.story
    }

    if (response.challenges) {
      this.set(response.challenges, { parse: true })
      delete response.challenges
    }

    return response
  }
});
