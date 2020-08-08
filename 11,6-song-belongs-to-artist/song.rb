class Song

    attr_accessor :title, :artist

    @@all = []

    def initialize(title, artist)
        @title = title
        @artist = artist
        @@all << self
    end

    def self.all
        @@all
    end
    
end

# one-to-many relationship: why are we adding the instance that "has many" to the one that "belongs to"?

# User -< Tweet
# :name     :message, :user