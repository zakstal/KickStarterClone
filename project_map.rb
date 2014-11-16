



for thrusday
  filepicker io
  add pic column where needed
  vidio uploder
  add facebook sign up
  there is a problem with the userdrop down rendering the project getting a 404
  ----later



 swich current user json to user
 current user json just fectch id || send id to initialize on singin/signup












f-users
  username
  email
 password
 session
 bio
  has one picture : need polymorphic picture model
  has one location: need location model
  has many projects
  pledges to many projects:
  has many websites:
  ------extra
  multiple sessions


-project
  user_id
  catagorie_id
  title
  description
  has one video: need polymorphic model
  has one location
  has one catagory
  has many pledges
  has many backers through pled
  has many rewards
  -----extra
  calculate on lookup the amount of days left
  add in model a method that makes funding days left into date
when creating a new project redirect to signup if not signed in, then redirect to start project page
  add user bio as requirment to make a project
  needs a cancelled or active column
  add filepicker image upload

  splitup user title description in backbone into two pages
?: should this have a "has a story" story has video description challenge

-reward
  backer_id
  project_id
  pledge_amt
  description
  delivery
  qty
  belongs_to project
  has_many backers

-story
  addvideo column
  description
  challneges

-backers
  user_id
  reward_id



-backed_projects


-pledge
  user_id
  project_id
    has one reward: need reward model
    belongs to user
    belongs to project

  ------------------
---project---

-auth

-signup
  form-
  username present
  email present
  password present: read on validates confirmation true


-user settings partial: would have links to
  email & password page: can change password and email
  bio page: can update and change bio info, name, picutre
    -make picture model
    -add bio column
    -settings controller
    -settings form
    -edit user from


-main page
  -create video model
  -find out how to upload and display videos

-catagory page
  create catagory model

-create project page

-go back to user settings partial add backed projects and created projects

----notes

is there a way to for a linknto to send a request through a controller and have it reutrun to
the current page but only from this page

project sign up links are weird when it leavs the reward page

make user_id in userbio table an integer

add url bounce back for updates of project data

refine seed database use faker gem

bulid an employers tab to fill in fomrs

look into codeacademy api

add image association to project model

need to brew install imagemagick
