class Definition < ApplicationRecord
  belongs_to :word

  def to_s
    self.content.downcase
  end
  
end
