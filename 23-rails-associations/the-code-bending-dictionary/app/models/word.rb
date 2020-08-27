class Word < ApplicationRecord

    has_many :favorites

    def named_right
        self.content.titleize
    end

    def to_s
        self.content.titleize
    end
    
end
