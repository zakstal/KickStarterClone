KS.Views.ProjectThumnailList = Backbone.View.extend({

  tagName: 'div',

  render: function () {
    var that = this
    this.collection.forEach(function (project) {
      var projectThum = new KS.Views.ProjectThumnail({
        model: project.attributes
      });
      that.$el.append(projectThum.render().$el)
    });

    return this;
  }

});