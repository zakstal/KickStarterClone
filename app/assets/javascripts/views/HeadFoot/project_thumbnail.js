KS.Views.ProjectThumnail = Backbone.View.extend({
  template: JST['headfoot/dropdown/project_thumbnail'],

  render: function () {
    var template = this.template({ project: this.model })

    this.$el.html(template);

    return this;
  }
});