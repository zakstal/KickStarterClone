class Picture < ActiveRecord::Base
  belongs_to :image, polymorphic: true
end
