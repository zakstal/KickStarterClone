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

  backedProjects: function() {
    if(!this._backedProjects) {
      this._backedProjects = new KS.Collections.Projects([],{
        user: this
      });
    }
    return this._backedProjects;
  },

  comments: function() {
    if(!this._comments) {
      this._comments = new KS.Collections.Comments([],{
        user: this
      });
    }
    return this._comments;
  },


  parse: function(response) {
    if (response.projects){
      this.projects().set(response.projects, { parse: true })
      delete response.projects
    }

    if (response.backed_projects){
      this.backedProjects().set(response.backed_projects, { parse: true })
      delete response.backed_projects
    }

    if (response.comments){
      this.comments().set(response.comments, { parse: true })
      delete response.comments
    }
    return response
  }
});
