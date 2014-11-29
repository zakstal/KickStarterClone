


def get_month(num)
  mons = %w(Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
  mons[num]
end

def make_date_string(user)
  month = user.created_at.month
  year = user.created_at.year.to_s
  get_month(month.to_i - 1) + " " + year
end




  json.id                         @user.id
  json.email                      @user.email
  json.joined                     make_date_string(@user)
  json.number_of_backed_projects  @user.number_of_backed_projects


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


json.comments             @user.comments do |comment|
  json.comment                comment.comment
  json.comment_date           make_date_string(comment)
  json.project_id             comment.project.id
  json.project_title          comment.project.title
  if comment.user.pictures.first.nil?
    json.that_url image_path('dog.jpg')
  else
    json.that_url comment.user.pictures.last.pic.url
  end
end
