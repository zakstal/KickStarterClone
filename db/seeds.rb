# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
#
# 3.times do |i|
# Users.create({email: "#{i}me@me.com", password: "#{i}password"})
# end
#
#
# 3.times do |i|
#   UserBio.create({ username: "mary#{i}", bio: "loves the number #{i}", user_id: "#{i + 1}"})
# end
#
# 2.times do |i|
#     Project.create({
#     title: "The best number is: #{i}",
#     description: "number #{i} is the best",
#     user_id: i + 1,
#     catagory_id: "dance",
#     duration: "30",
#     fundinggoal: "$#{ 100 + i }",
#     })
# end
#
# [:dance, :food].each_with_index do |cat, i|
#
#   Catagorie.create({ catagory: cat, project_id: i + 1 })
#
# end
#
#
#
# 2.times do |i|
#    Story.create({
#     story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
#     challenges: "this is my challenge",
#     project_id: i + 1
#    })
# end
#
#
# 2.times do |i|
#   3.times do |j|
#     Reward.create({
#       project_id: i + 1,
#       pledge_amt: i + 1,
#       description: "so cool product of mine",
#       est_delivery: "10/1/2087",
#       qty: i + 3
#       })
#   end
# end
#
#
# Users.create(email: 'james@me.com', password: 'password')
#
#
# Project.create({
# title: "Sun for Summer",
# description: "Solar manipulation device for summer",
# user_id: 4,
# catagory_id: "technology",
# duration: "30",
# fundinggoal: "10000",
# })
#
# Story.create({
#  story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
#  challenges: "this is my challenge",
#  project_id: 3
# })
#
# Project.create({
# title: "Wombats in disguise",
# description: "Creating the secret poliece of the Wombat order. Hoping for some secret missions",
# user_id: 4,
# catagory_id: "food",
# duration: "30",
# fundinggoal: "5",
# })
#
# Story.create({
#  story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
#  challenges: "this is my challenge",
#  project_id: 4
# })
#
#
# UserBio.create({username: "James Adams", bio: "love to go wing suiting", user_id: 4})
#
# Reward.create({ project_id: 4, pledge_amt: 5, description: "great thing to have", est_delivery: "11/30/14", qty: 5})
# Reward.create({ project_id: 4, pledge_amt: 10, description: "bad reward", est_delivery: "11/30/14", qty: 6})
# Reward.create({ project_id: 4, pledge_amt: 20, description: "having things is good :)", est_delivery: "11/30/14", qty: 9})
#
# ClaimedRewards.create({ reward_id: 7, user_id: 1})
# ClaimedRewards.create({ reward_id: 8, user_id: 2})
# ClaimedRewards.create({ reward_id: 7, user_id: 3})
#
#
#
#
#
#
#
#
# Users.create(email: 'zak@me.com', password: 'password')
#
# UserBio.create({ username: "Zak", bio: "I like blue sharks", user_id: 5})
#
# Project.create({
# title: "Homes clothes",
# description: "Solar manipulation device for summer",
# user_id: 4,
# catagory_id: "technology",
# duration: "30",
# fundinggoal: "10000",
# })
#
# Story.create({
#  story: "We’re the Young@Heart Chorus and we’re launching the Young@Heart Prison Project, a series of rehearsals and ",
#  challenges: "this is my challenge",
#  project_id: 3
# })
#
# Project.create({
# title: "Hours of power",
# description: "n 2006, the Young@Heart (Y@H) performed at the Hampshire County House of Correction. The concert was filmed ”",
# user_id: 4,
# catagory_id: "food",
# duration: "30",
# fundinggoal: "5",
# })
#
# Story.create({
#  story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
#  challenges: "this is my challenge",
#  project_id: 4
# })
#
#
# UserBio.create({username: "Zak Stallings", bio: "love to go wing suiting too", user_id: 5})
#
# Reward.create({ project_id: 4, pledge_amt: 5, description: "great thing to have", est_delivery: "11/30/14", qty: 5})
# Reward.create({ project_id: 4, pledge_amt: 10, description: "bad reward", est_delivery: "11/30/14", qty: 6})
# Reward.create({ project_id: 4, pledge_amt: 20, description: "having things is good :)", est_delivery: "11/30/14", qty: 9})
#
# ClaimedRewards.create({ reward_id: 7, user_id: 1})
# ClaimedRewards.create({ reward_id: 8, user_id: 2})


#-------------Random Users-------------------
def random_cat
  a = ["dance", "food", "technology", "design", "games"]
  a[rand(a.length)]
end

def rand_funding_goal
  goal = 0
  while goal < 2000
    goal = rand(100000)
  end
  goal
end

20.times do |i|
Users.create(email: Faker::Internet.email, password: 'password')
UserBio.create({username: Faker::Name.name, bio: Faker::Name.title, user_id: i + 21 })
end

100.times do |i|
user_id = i + 1
Users.create(email: Faker::Internet.email, password: 'password')
UserBio.create({username: Faker::Name.name, bio: Faker::Name.title, user_id: user_id })

  Project.create({
  title: "Homes clothes",
  description: "Solar manipulation device for summer",
  user_id: user_id ,
  catagory_id: random_cat,
  duration: rand(41),
  fundinggoal: "10000",
  })

  Story.create({
   story: "We’re the Young@Heart Chorus and we’re launching the Young@Heart Prison Project, a series of rehearsals and ",
   challenges: "this is my challenge",
   project_id: 3
  })


  Reward.create({ project_id: 4, pledge_amt: 5, description: "great thing to have", est_delivery: "11/30/14", qty: 5})
  Reward.create({ project_id: 4, pledge_amt: 10, description: "bad reward", est_delivery: "11/30/14", qty: 6})
  Reward.create({ project_id: 4, pledge_amt: 20, description: "having things is good :)", est_delivery: "11/30/14", qty: 9})
  Reward.create({ project_id: 4, pledge_amt: 20, description: "having things is good :)", est_delivery: "11/30/14", qty: 9})

end
