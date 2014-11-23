


  def get_month(num)
    mons = %w(Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
    mons[num]
  end

  def make_date_string
    month = @user.created_at.month
    year = @user.created_at.year.to_s
    get_month(month.to_i - 1) + " " + year
  end



  json.user do
    json.id                         @user.id
    json.email                      @user.email
    json.session_token              @user.session_token
    json.joined                     make_date_string
    json.number_of_backed_projects  @user.number_of_backed_projects
  end

  if !@user.user_bio.nil?
      json.username       @user.user_bio.username
      json.bio            @user.user_bio.bio
      json.filepicker_url @user.user_bio.filepicker_url
  end

  if !@user.projects.empty?
    json.projects @user.projects do |project|
      json.id           project.id
      json.title        project.title
      json.description  project.description
      json.catagory_id  project.catagory_id
      json.created_at   project.created_at
      json.updated_at   project.updated_at
      json.duration     project.duration
      json.fundinggoal  project.fundinggoal
      json.active       project.active
      json.funded       project.funded

      if project.pictures.first.nil?
        json.that_url image_path('cute.jpg')
      else
        json.that_url project.pictures.last.pic.url
      end

    end
  end
  #
  if !@user.backed_projects.empty?
    json.backed_projects @user.backed_projects do |backed_project|
      json.id           backed_project.id
      json.title        backed_project.title
      json.description  backed_project.description
      json.catagory_id  backed_project.catagory_id
      json.created_at   backed_project.created_at
      json.updated_at   backed_project.updated_at
      json.duration     backed_project.duration
      json.fundinggoal  backed_project.fundinggoal
      json.active       backed_project.active
      json.funded       backed_project.funded

      if backed_project.pictures.first.nil?
        json.that_url image_path('cute.jpg')
      else
        json.that_url backed_project.pictures.last.pic.url
      end

    end
  end

  if @user.pictures.first.nil?
    json.that_url image_path('dog.jpg')
  else
    json.that_url @user.pictures.last.pic.url
  end


# do |backed_project|
#   json.title backed_project.backed_projects.title
# end


# json.(@user, :email, :password_digest, :session_token, :created_at, :updated_at)
#
#
#
# if !@user.user_bio.nil?
#   json.user_bio @user.user_bio do |bio|
#     json.(bio, :username, :bio, :filepicker_url)
#   end
#
# end
#
# json.backed_projects @user.backed_projects do |backed_project|
#   json.(backed_projects, :title, :description, :catagory_id, :created_at, :updated_at, :duration, :fundinggoal,
#   :active, :funded)
# end
#
# json.projects @user.projects do |projects|
#   json.(projects, :title, :description, :catagory_id, :created_at, :updated_at, :duration, :fundinggoal,
#   :active, :funded)
# end
