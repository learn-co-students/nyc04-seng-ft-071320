class Artist

    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name
        # @songs = songs
        @@all << self
    end

    def self.all
        @@all
    end
    
end