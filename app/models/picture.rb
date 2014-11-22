class Picture < ActiveRecord::Base
  belongs_to :image, polymorphic: true
  has_attached_file :pic, :styles => {
    :big => "600x600#",
    :small => "50x50#",
    :thumb => "28x28#",
    
  }

  validates_attachment_content_type(
    :pic,
    :content_type => /\Aimage\/.*\Z/
  )

end
