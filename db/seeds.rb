# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



3.times do |i|
users = []
users << {email: "#{i}me@me.com", password: "#{i}password"}
end
Users.create(users)

3.times do |i|
  user_bios = []
  user_bios << { username: "mary", bio: "loves the number #{i}", :user_id "#{i}"}
  UserBio.create(user_bios)
end

2.times do |i|
  projects = []
  projects << {
    title: "the best number is: #{i}",
    description: "number #{i} is the best",
    user_id: i,
    catagory_id: "dance",
    duration: "30",
    fundinggoal: "$#{ 100 + i }",
  }
  Projects.create(projects)
end

2.times do |i|
  cata = []
  cata << {catagory: "dance", project_id: i }
  Catagories.create(cata)
end

2.times do |i|
  story = []
  story << {
    story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    project_id: i
   }
   Stories.create(story)
end


create_table "rewards", force: true do |t|
  t.integer  "backer_id"
  t.integer  "project_id",   null: false
  t.integer  "pledge_amt",   null: false
  t.string   "description",  null: false
  t.string   "est_delivery", null: false
  t.integer  "qty",          null: false
  t.datetime "created_at"
  t.datetime "updated_at"
end


2.times do |i|
  rewards = []
  3.times do |j|
    rewards << {
      backer_id: ((i + j).even? ? 1 : 0),
      project_id: i,
      pledge_amt: i + 1,
      description: "so cool product of mine",
      est_delivery: "10/1/2087", i + 3
    }
  end

end