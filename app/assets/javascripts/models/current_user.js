KS.Models.CurrentUser = Backbone.Model.extend({
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

  parse: function(response) {
    console.log(response, "in parse user")
    if (response.user){
      this.set(response.user, { parse: true })
      delete response.user
    }

    if (response.projects){
       this.projects().set(response.projects, { parse: true })
       delete response.projects
     }

     if (response.backed_projects){
        this.backedProjects().set(response.backed_projects, { parse: true })
        delete response.backed_projects
      }

    return response;
  }

});
