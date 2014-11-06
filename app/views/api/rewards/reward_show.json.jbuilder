# json.user do
#   json.id            @user.id
#   json.email         @user.email
#   json.session_token @user.session_token
# end


json.reward do
  json.id             @reward.id
  json.description    @reward.description
  json.est_delivery   @reward.est_delivery
  json.pledge_amt     @reward.pledge_amt
  json.project_id     @reward.project_id
  json.qty            @reward.qty
  json.project_title  @reward.project.title

end

#dont forget to parse in rward js model
