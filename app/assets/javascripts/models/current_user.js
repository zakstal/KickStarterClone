KS.Models.CurrentUser = Backbone.Model.extend({
  urlRoot: 'api/get_current_user',

  projects: function() {
    if(!this._projects) {
      this._projects = new KS.Collections.Projects([],{
        user: this
      });
    }
      return this._projects;
  },

  parse: function(response) {
    if (response.user){
      this.set(response.user, { parse: true })
      delete response.user
    }

    if (response.projects){
       this.projects().set(response.projects, { parse: true })
       delete response.projects
     }

    return response;
  }

});
