class Word < ApplicationRecord

    has_many :favorites, dependent: :destroy
    has_many :definitions, -> {order ("created_at DESC")}, dependent: :destroy

    def to_s
        self.content.titleize
    end
    
end
