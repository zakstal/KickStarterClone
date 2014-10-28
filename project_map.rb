-users
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


-project
  user_id
  title
  description
  has one video: need polymorphic model
  has one location
  has one catagory
  has many pledges
  has many backers through pled
  has many rewards
?: should this have a "has a story" story has video description challenge


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



