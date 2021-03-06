
  def get_month(num)
    mons = %w(Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)
    mons[num]
  end

  def make_date_string(user)
    month = user.created_at.month
    year = user.created_at.year.to_s
    get_month(month.to_i - 1) + " " + year
  end

  def format_numbers(amt)
    if amt == 0
      0
    else
      goal_split_in_three_digits = amt.to_s.reverse.scan(/.{1,3}/)
      goal_split_in_three_digits.join(",").reverse
    end
  end
  #
  json.title              @project.title
  json.description        @project.description
  json.catagory_id        @project.catagory_id
  json.created_at         @project.created_at
  json.updated_at         @project.updated_at
  json.duration           @project.duration
  json.fundinggoal        format_numbers(@project.fundinggoal)
  json.active             @project.active
  json.funded             format_numbers(@project.funded)
  json.amt_pledged        format_numbers(@project.amt_pledged)
  json.comment_count      @project.comment_count
  json.vcode              @project.vcode

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
  json.number_of_backers      format_numbers(@project.how_many_backers)
  json.backers                @project.backers

  if @project.user.pictures.first.nil? || @project.user.pictures.last.pic.url.include?("missing")
    json.user_pic image_path('dog.jpg')
  else
    json.user_pic @project.user.pictures.last.pic.url
  end

  json.rewards            @project.rewards.reverse do |reward|
    json.id                 reward.id
    json.project_id         reward.project_id
    json.pledge_amt         reward.pledge_amt
    json.description        reward.description
    json.times_backed       reward.times_backed
  end

  if !@project.story.nil?
    json.story            @project.story
  end

  uniq_claimed_rewards = @project.claimed_rewards.select(:user_id).distinct

  json.backers                  uniq_claimed_rewards.reverse do |backer|
    json.backer_id                backer.user.id
    json.backer_username          backer.user.name
    json.other_backed_projects    backer.user.number_of_backed_projects
    if backer.user.pictures.first.nil?
      json.that_url image_path('dog.jpg')
    else
      json.that_url backer.user.pictures.last.pic.url
    end
  end

  json.comments             @project.comment.reverse do |comment|
    json.comment                comment.comment
    json.comment_date           make_date_string(comment)
    json.user_id                comment.user.id
    json.user_name              comment.user.name
    if comment.user.pictures.first.nil?
      json.that_url image_path('dog.jpg')
    else
      json.that_url comment.user.pictures.last.pic.url
    end

  end
