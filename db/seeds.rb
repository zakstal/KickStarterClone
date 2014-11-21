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


#-------------Generate Random Images---------

suckr = ImageSuckr::GoogleSuckr.new

#-------------Markov Chain-------------------

markov = MarkyMarkov::Dictionary.new('dictionary',3)
markov.parse_file "db/seed_for_markov_chain.txt"

#-------------Random Users-------------------

markov.class_eval do
  def number_of_sentences_from_to(from, to)
    eval "self.generate_#{rand_number_from_to(from,to)}_sentences"
  end
end


def rand_number_from_to(from,to)
  goal = 0
  while goal < from
    goal = rand(to)
  end
  goal
end



def random_date
  rand_number_from_to(from,to)
  Faker::Date.forward(23)
end


def random_cat
  a = ["dance", "food", "technology", "design", "games"]
  a[rand(a.length)]
end



20.times do |i|
  puts "user #{i}"
Users.create(email: (i == 0 ? "user@user.com" : Faker::Internet.email ), password: 'password')
UserBio.create({username: Faker::Name.name, bio: Faker::Name.title, user_id: i + 1})
Users.find_by_id((i + 1)).pictures.create({pic: Faker::Avatar.image("user-#{i + 21}")})
end

100.times do |i|
  puts "Project #{i}"
user_id = i + 21
project_id = i + 1
duration = rand(41)
cat_id = random_cat
Users.create(email: Faker::Internet.email, password: 'password')
UserBio.create({username: Faker::Name.name, bio: Faker::Name.title, user_id: user_id })
Users.find_by_id(user_id).pictures.create({pic: Faker::Avatar.image("project-#{project_id}")})

  Project.create({
  title: Faker::Commerce.product_name,
  description:  markov.generate_1_sentences,
  user_id: user_id ,
  catagory_id: cat_id,
  duration: duration,
  fundinggoal: rand_number_from_to(2000,100000),
  })
  # begin
  #   Project.find_by_id(project_id).pictures.create({pic: suckr.get_image_url})
  # rescue Exception => e
  #   puts "Oops I'll try again"
  # retry
  # end
  Story.create({
   story: markov.number_of_sentences_from_to(5,20),
   challenges: markov.number_of_sentences_from_to(5,10),
   project_id: project_id
  })

  Catagorie.create(catagory: cat_id, project_id: project_id)

  rand_number_from_to(2,10).times do |j|
    puts "reward #{j} 0f project #{i}"
    Reward.create({ project_id: project_id, pledge_amt: rand_number_from_to(1,20), description: markov.number_of_sentences_from_to(2,3), est_delivery: Faker::Date.forward(duration + rand(40)), qty: rand_number_from_to(10,20)})
  end
end
