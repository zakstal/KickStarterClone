# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



3.times do |i|
Users.create({email: "#{i}me@me.com", password: "#{i}password"})
end


3.times do |i|
  UserBio.create({ username: "mary#{i}", bio: "loves the number #{i}", user_id: "#{i + 1}"})
end

2.times do |i|
    Project.create({
    title: "The best number is: #{i}",
    description: "number #{i} is the best",
    user_id: i + 1,
    catagory_id: "dance",
    duration: "30",
    fundinggoal: "$#{ 100 + i }",
    })
end

[:dance, :food].each_with_index do |cat, i|

  Catagorie.create({ catagory: cat, project_id: i + 1 })

end



2.times do |i|
   Story.create({
    story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    challenges: "this is my challenge",
    project_id: i + 1
   })
end


2.times do |i|
  3.times do |j|
    Reward.create({
      backer_id: ((i + j).even? ? 2 : 1),
      project_id: i + 1,
      pledge_amt: i + 1,
      description: "so cool product of mine",
      est_delivery: "10/1/2087",
      qty: i + 3
      })
  end
end