
# this opens a youtube client and does searches on various topics, returns vidoes and then
# the videos id and then adds the id to each project in the database

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

  Project.all.each_with_index do |project, i|
    vcode = vids.pop
    project.vcode.create(
      project_id: project.id,
      vcode: vcode
    )
    puts "#{project.vcode} created #{i}"
  end
end
