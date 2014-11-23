class Project < ActiveRecord::Base

  validates   :title,     :title, :user_id, presence: true
  validates   :title,     uniqueness: true

  has_many    :rewards,         class_name: "Reward"
  has_one     :story,           class_name: "Story",        foreign_key: :project_id

  has_many    :claimed_rewards, through: :rewards,          source: :claimed_rewards

  belongs_to  :user,            class_name: "Users",        foreign_key: :user_id,      primary_key: :id
  belongs_to  :catagory,        class_name: "Catagorie",    foreign_key: :catagory_id,  primary_key: :catagory

  has_many    :pictures, as: :image

  def backers
    claimed_rewards.map do |claimed|
      claimed.user.id
    end
  end

  def amt_pledged
    claimed = claimed_rewards.map { |claimed| claimed.reward.pledge_amt }.inject(:+)

    claimed.nil? ? 0 : claimed
  end

  def how_many_backers
    backers.count
  end

  def username
    return if user.user_bio.nil?
    user.user_bio.username
  end

  def project_story
    return if story.nil?
    story.story
  end

  def project_challenges
    return if story.nil?
    story.challenges
  end

  def percent_funded
    return 0 if amt_pledged == 0
    (amt_pledged * 100)/self.fundinggoal.to_i
  end

end
