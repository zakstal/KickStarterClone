KS.Models.Project = Backbone.Model.extend({
  urlRoot: 'api/projects',

  parse: function(response) {
    // if (response.user){
 //      user = new KS.Models.User();
 //      user.set(response.user, { parse: true })
 //      KS.currentUser = user
 //      delete response.user
 //    }
 //    return this
  }
});