KS.RootRouter = Backbone.Router.extend({

  initialize: function (options){

    this.$rootEl = options.$rootEl
    this.$rootBody = options.$rootBody

    // this._getCurrentUserInfo
    //
    // var view = new KS.Views.Head({
    //     currentUser: this._getCurrentUserInfo()
    // });
    // console.log("after initailze of head",this.currentUser)
    // this.$rootEl.html(view.render().$el)
  },

  routes: {
    ""                    : "index",
    "user/new"            : "usernew",
    "user/:id"            : "usershow",
    "user/:id/edit"       : "useredit",
    "project/new"         : "projectnew",
    "project/:id"         : "projectshow",
    "project/:id/edit"    : "projectedit",
    "project/reward/:id"  : "showReward",
    "project/:id/basic"   : "basicNew",
    "project/:id/rewards" : "rewardsNew",
    "project/:id/story"   : "storyNew",
    "project/:id/about"   : "userAbout",
    "catagory"            : "catagoryindex",
    "catagory/:id"        : "catagoryshow",
    "session/new"         : "newSession"
  },

  index: function () {
    // this._getCurrentUserInfo
    this._getCurrentUserInfo

    var view = new KS.Views.Head({
      currentUser: this._getCurrentUserInfo()
    });
    console.log("after initailze of head",this.currentUser)
    // this.$rootEl.html(view.render().$el)
    var front = new KS.Views.FrontPage();
    this._swapViewHead(view);
    this._swapView(front);
  },

//-----------user routes------------------

  usernew: function () {
    var showSignUp = new KS.Views.SignUp();
    this._swapView(showSignUp);
  },

  usershow: function (id) {
    var userInfo = new KS.Models.User({ id: id })
    userInfo.fetch()
    
    var showBody = new KS.Views.UserShow({ model: userInfo });
    this._swapView(showBody);
  },

  useredit: function() {
    var showBody = new KS.Views.UserEdit({
      model: this._getCurrentUserInfo(),
      userEdit: "true"
    });
    this._swapView(showBody);
  },

//-----------project routes-----------------

  projectshow: function(id) {
    var project = KS.projects.get(id)//new KS.Models.Project({ id: id })
    console.log(project)
    project.fetch()

    var showBody = new KS.Views.ProjectShow({
      project: project
    });

    this._swapView(showBody);
  },

  projectnew: function () {
    // console.log(this.currentUser(),"in new")
    var emptyProject = new KS.Models.Project()
    var newProject = new KS.Views.ProjectNew({
      project: emptyProject,
      currentUser: this.currentUser
    });

    this._swapView(newProject)
  },

  projectedit: function (id) {
    var project = new KS.Models.Project({ id: id })
    project.fetch()

    var newProject = new KS.Views.ProjectNew({ project: project })

    this._swapView(newProject)
  },

  showReward: function(id) {
    this.currentUser
    console.log("in show reward", this.currentUser)

    var reward = new KS.Models.Reward({ id: id})
    reward.fetch()

    console.log(reward.get('project_id'))
    var rewardView = new KS.Views.RewardConfirm({
      reward: reward,
      currentUser: this.currentUser
    });

    this._swapView(rewardView)
  },

  basicNew: function (id) {
    console.log(id, "in basic")


    var project = new KS.Models.Project({ id: id })
    project.fetch()

    var basic = new KS.Views.ProjectPartialBasic({
      project: project
    });

    this._swapView(basic)
  },

  rewardsNew: function (id) {
    console.log(id, "in rewards")


    var project = new KS.Models.Project({ id: id })
    project.fetch()
    console.log(project, "in rewards")
    var basic = new KS.Views.ProjectPartialReward({
      project: project
    });

    this._swapView(basic)
  },

  storyNew: function (id) {
    console.log(id, "in story")


    var project = new KS.Models.Project({ id: id })
    project.fetch()

    console.log(project, "in story")
    var basic = new KS.Views.ProjectPartialStory({
      project: project,
      model: project
    });

    this._swapView(basic)
  },

  userAbout: function() {
    var showBody = new KS.Views.UserEdit({
      model: this._getCurrentUserInfo(),
      userEdit: "false"
    });
    this._swapView(showBody);
  },


//-------------catagory raoutes ----------------

  catagoryindex: function() {
    var index = new KS.Views.CatagoryIndex();

    this._swapView(index);
  },

  catagoryshow: function(id) {

    var catagory = new KS.Models.Catagory({ id: id })
    catagory.fetch()
    console.log(catagory, "in show")

    var showBody = new KS.Views.CatagoryShow({
      catagory: catagory
    });

    this._swapView(showBody);
  },

//---------------Sign in, Sign up------------------

  newSession: function () {
    var sessionView = new KS.Views.SignIn();
    this._swapView(sessionView);
  },

  _swapView: function(view) {
    this._current && this._current.remove()
    this._current = view;
    this.$rootBody.html(view.render().$el)
  },

  _swapViewHead: function(view) {
    this._currentHead && this._current.remove()
    this._currentHead = view;
    this.$rootEl.html(view.render().$el)
  },


  _getCurrentUserInfo: function () {
    // if (typeof this.currentUser === 'undefined') {

      var currentUser = new KS.Models.CurrentUser()
      currentUser.fetch({
        success: function (){
          // if ( typeof currentUser.get('id') !== 'undefined') {

            KS.currentUserId = currentUser.get('id')
          // }
        }
      });

      this.currentUser = currentUser
    // }

    return this.currentUser
  }

});
