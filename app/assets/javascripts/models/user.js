KS.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  projects: function() {
    if(!this._projects) {
      this._projects = new KS.Collections.Projects([],{
        user: this
      });
    }
      return this._projects;
  },

  comments: function() {
    if(!this._comments) {
      this._comments = new KS.Collections.Comments([],{
        user: this
      });
    }
    return this._projects;
  },


  parse: function(response) {
    if (response.projects){
      this.projects().set(response.projects, { parse: true })
      delete response.projects
    }

    if (response.comments){
      this.comments().set(response.comments, { parse: true })
      delete response.comments
    }
    return response
  }
});
