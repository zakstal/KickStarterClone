KS.Models.Catagory = Backbone.Model.extend({
  urlRoot: 'api/catagories',

  projects: function() {
    if(!this._projects) {
      this._projects = new KS.Collections.Projects([],{
        catagory: this
      });
    }
      return this._projects;
  },

  parse: function(response) {
    if (response.projects){
       this.projects().set(response.projects, { parse: true })
       delete response.projects
     }

    return response
  }
});
