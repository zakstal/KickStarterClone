# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

# ClaimedRewards.create({ reward_id: 7, user_id: 1})
# ClaimedRewards.create({ reward_id: 8, user_id: 2})

def new_client
  client = YouTubeIt::Client.new(:dev_key => "AI39si4JAMw83R4TIzHRaCJ2W1Yp7aAI06RVcBe9l6Adu8KENFlrcS_7-ZL8UjfXp_1_56_6uqLjx24p5Aw7o6EWWHiodV4PTA")
end

def find_vids
  new_client
 vid_ids = []
    %w(puppies wingsuit salsa bats queen).each do |type|
      vids = new_client.videos_by(query: type).videos.map { |v| v.unique_id }
      vid_ids << vids
    end
 vid_ids.flatten.shuffle
end

def add_vidoes_to_projects
  vids = find_vids
  puts Project.all.count
  puts "videos uploading"
  Project.all.each_with_index do |project, i|
    vcode = vids.pop
    project.youtube_code.create(
      project_id: project.id,
      vcode: vcode
    )
    puts "#{project.vcode} created #{i}"
  end
end
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

all_errors = []
cr = []
20.times do |i|
  puts "user #{i}"

  retry_count = 0
  begin
  if retry_count < 10
    Users.create!(email: (i == 0 ? "user@user.com" : Faker::Internet.email ), password: 'password')
  end
  rescue Exception => e
    retry_count += 1
    puts "error"
    all_errors << e
  retry
  end

  retry_count = 0
  begin
  if retry_count < 10
    UserBio.create!({username: Faker::Name.name, bio: Faker::Name.title, user_id: i + 1})
  end
  rescue Exception => e
    retry_count += 1
    puts "error"
    all_errors << e
  retry
  end
# Users.find_by_id((i + 1)).pictures.create({pic: Faker::Avatar.image("user-#{i + 21}")})
end

101.times do |i|
    puts "Project #{i}"
  user_id = i + 21
  project_id = i + 1
  duration = rand(41)
  cat_id = random_cat
  funding_goal = rand_number_from_to(2000,100000)

  retry_count = 0
  begin
  if retry_count < 10
    Users.create!(email: Faker::Internet.email, password: 'password')
  end
  rescue Exception => e
    retry_count += 1
    puts "error on project #{i}"
    all_errors << e
  retry
  end

  retry_count = 0
  begin
  if retry_count < 10
    UserBio.create!({username: Faker::Name.name, bio: Faker::Name.title, user_id: user_id })
  end
  rescue Exception => e
    retry_count += 1
    puts "error"
    all_errors << e
  retry
  end
  # # Users.find_by_id(user_id).pictures.create({pic: Faker::Avatar.image("project-#{project_id}")})
  retry_count = 0
  begin
  if retry_count < 10
    Project.create!({
    title: Faker::Commerce.product_name,
    description:  markov.generate_1_sentences,
    user_id: user_id ,
    catagory_id: cat_id,
    duration: duration,
    fundinggoal: funding_goal,
    })
  end
  rescue Exception => e
    retry_count += 1
    puts "error"
    all_errors << e
  retry
  end

  # retry_count = 0
  # begin
  #   if retry_count < 10
  #     Project.find_by_id(project_id).pictures.create!({pic: suckr.get_image_url})
  #   end
  # rescue Exception => e
  #   retry_count += 1
  #   puts "Oops I'll try again"
  #   all_errors << e
  # retry
  # end

  retry_count = 0
  begin
  if retry_count < 10
    Story.create!({
     story: markov.number_of_sentences_from_to(5,20),
     challenges: markov.number_of_sentences_from_to(5,10),
     project_id: project_id
    })
  end
  rescue Exception => e
    retry_count += 1
    puts "error"
    all_errors << e
  retry
  end

  retry_count = 0
  begin
  if retry_count < 10
    Catagorie.create!(catagory: cat_id, project_id: project_id)
  end
  rescue Exception => e
    retry_count += 1
    puts "error"
    all_errors << e
  retry
  end

  number_of_rewards = rand_number_from_to(2,10)

  pledge_amt = funding_goal/20
  slice_of_pledge_amt = funding_goal * 0.01
  multiply_percent = 0.01
  number_of_rewards.times do |j|
    puts "reward #{j} 0f project #{i}"

    rand_amt = (slice_of_pledge_amt * (j + 1) * multiply_percent)
    multiply_percent = rand_amt > 1000 ? multiply_percent : (j + 1) * multiply_percent
    retry_count = 0
    begin
    if retry_count < 10
      Reward.create!({ project_id: project_id, pledge_amt: rand_amt, description: markov.number_of_sentences_from_to(2,3), est_delivery: Faker::Date.forward(duration + rand(40)), qty: rand_number_from_to(10,20)})
    end
    rescue Exception => e
      retry_count += 1
      puts "error reward"
      all_errors << e
    retry
    end

    rand_number_from_to(1, 20).times do |k|

      puts "claimed reward #{k} of reward #{j}"
      user_id = rand_number_from_to(1, 120)

      retry_count = 0
      begin
      if retry_count < 10
        Reward.last.claimed_rewards.create!({ user_id: user_id })
      end
      rescue Exception => e
        retry_count += 1
        puts "error claimed reward"
        all_errors << e
      retry
      end

      comment = markov.number_of_sentences_from_to(1,3)
      puts "comment #{user_id}"

      retry_count = 0
      begin
      if retry_count < 10
        Comment.create!(user_id: user_id, project_id: project_id, comment: comment) if rand(2) == 1
      end
      rescue Exception => e
        retry_count += 1
        puts "error"
        all_errors << e
      retry
      end
    end
  end
end


add_vidoes_to_projects

puts "-----errors:"

all_errors.each do |error|
  puts error
end

# puts "------claimed rewards"
#
# cr.each do |c|
#   puts c
# end
