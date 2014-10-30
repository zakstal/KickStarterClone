class Catagorie < ActiveRecord::Base
  CATAGORIES = [
    :technology,
    :food,
    :dance,
    :design,
    :games
  ]
  has_many :projects, class_name: "Project", foreign_key: :catagory_id, primary_key: :catagory
end
