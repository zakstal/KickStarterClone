KS.Routers.CatagoryRoute = KS.RootRouter.extend({

  routes: {
    "catagory": "index",
    "catagory/:id": "show"
  },

  index: function() {
    var index = new KS.Views.CatagoryIndex();

    this._swapView(index);
  },

  show: function(id) {

    var catagory = new KS.Models.Catagory({ id: id })
    catagory.fetch()
    console.log(catagory, "in show")
    
    var showBody = new KS.Views.CatagoryShow({
      catagory: catagory
    });

    this._swapView(showBody);
  },


});
