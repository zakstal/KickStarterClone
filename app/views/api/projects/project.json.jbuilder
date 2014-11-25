
  def format_money(amt)
    goal_split_in_three_digits = amt.reverse.scan(/.{1,3}/)
    goal_split_in_three_digits.join(",").reverse
  end

  json.title              @project.title
  json.description        @project.description
  json.catagory_id        @project.catagory_id
  json.created_at         @project.created_at
  json.updated_at         @project.updated_at
  json.duration           @project.duration
  json.fundinggoal        format_money(@project.fundinggoal)
  json.active             @project.active
  json.funded             @project.funded
  json.amt_pledged        @project.amt_pledged

  if @project.pictures.first.nil? || @project.user.pictures.last.pic.url.include?("missing")
    json.that_url image_path('cute.jpg')
  else
    json.that_url @project.pictures.last.pic.url
  end

  json.user_id                @project.user.id
  json.username               @project.username
  json.users_backed_projects  @project.user.number_of_backed_projects
  json.users_projects         @project.user.number_of_projects
  json.story                  @project.project_story
  json.number_of_backers      @project.how_many_backers
  json.backers                @project.backers
  json.amt_pledged            @project.amt_pledged

  if @project.user.pictures.first.nil? || @project.user.pictures.last.pic.url.include?("missing")
    json.user_pic image_path('dog.jpg')
  else
    json.user_pic @project.user.pictures.last.pic.url
  end

  json.rewards            @project.rewards do |reward|
    json.id                 reward.id
    json.project_id         reward.project_id
    json.pledge_amt         reward.pledge_amt
    json.description        reward.description
    json.times_backed       reward.times_backed
  end

if !@project.story.nil?
  json.story            @project.story
end
