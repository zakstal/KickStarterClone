class Catagorie < ActiveRecord::Base
  CATAGORIES = [
    "Technology",
    "Food",
    "Dance",
    "Design",
    "Games"
  ]
  has_many :projects
end
