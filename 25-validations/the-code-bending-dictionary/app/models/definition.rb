class Definition < ApplicationRecord
  belongs_to :word

  def to_s
    self.content.downcase
  end

  validate :right_number_of_words

  ## content
  ### no fewer words than X and not more than Y
  ### language check
  
  private

  def right_number_of_words
    words_number = self.content.split().length
    if words_number < 6 || words_number > 50
      self.errors.add(:content, "needs to be between 3 and 50 words long")
    end
  end

end
