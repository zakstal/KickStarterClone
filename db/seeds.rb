# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

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
  retry_count = 0
  begin
    if retry_count < 10
      Project.find_by_id(project_id).pictures.create({pic: suckr.get_image_url})
    end
  rescue Exception => e
    retry_count += 1
    puts "Oops I'll try again"
  retry
  end
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
