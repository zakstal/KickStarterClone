
json.catagory @catagory.catagory

# if !@catagory.projects.empty?
  json.projects @catagory.projects do |project|
    json.id             project.id
    json.title          project.title
    json.description    project.description
    json.catagory_id    project.catagory_id
    json.created_at     project.created_at
    json.updated_at     project.updated_at
    json.duration       project.duration
    json.fundinggoal    project.fundinggoal
    json.active         project.active
    json.funded         project.funded
    json.username       project.username
    json.amt_pledged    project.amt_pledged
    json.percent_funded project.percent_funded

    if project.pictures.first.nil?
      json.that_url image_path('cute.jpg')
    else
      json.that_url project.pictures.first.pic.url()
    end

  end
# end
