
json.project  do
  json.title              @project.title
  json.description        @project.description
  json.catagory_id        @project.catagory_id
  json.created_at         @project.created_at
  json.updated_at         @project.updated_at
  json.duration           @project.duration
  json.fundinggoal        @project.fundinggoal
  json.active             @project.active
  json.funded             @project.funded
end


json.username               @project.username
json.users_backed_projects  @project.user.number_of_backed_projects
json.users_projects         @project.user.number_of_projects
json.story                  @project.project_story
json.number_of_backers      @project.how_many_backers
json.backers                @project.backers
json.amt_pledged            @project.amt_pledged

json.rewards            @project.rewards do |reward|
  json.id                 reward.id
  json.project_id         reward.project_id
  json.pledge_amt         reward.pledge_amt
  json.description        reward.description
  json.times_backed       reward.times_backed
end