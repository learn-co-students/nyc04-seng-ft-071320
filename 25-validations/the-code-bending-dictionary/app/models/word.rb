class Word < ApplicationRecord

    has_many :favorites, dependent: :destroy
    has_many :definitions, -> {order ("created_at DESC")}, dependent: :destroy

    def to_s
        self.content.titleize
    end

    validates :content, length: { minimum: 2, maximum: 60}

    ## content
    # length (less than 20)
    # language check
    # alph-characters only
    
end
