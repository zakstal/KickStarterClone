KS.Views.CatagoryIndex = Backbone.View.extend({

  catagories: function () {
    return ["technology", "food", "dance", "design", "games"]
  },

  template: JST['catagory/all_catagories'],

  render: function () {
    var template = this.template({
      cats: this.catagories()
    });

    this.$el.html(template);

    return this;
  }

});
