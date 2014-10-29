class Catagorie < ActiveRecord::Base
  CATAGORIES = {
    Technology: 1,
    Food: 2,
    Dance: 3,
    Design: 4,
    Games: 5
  }
  has_many :projects
end
