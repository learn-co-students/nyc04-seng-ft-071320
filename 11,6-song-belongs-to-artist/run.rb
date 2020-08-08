require 'pry'
require 'require_all'

require_all '.'

# the correct way would be to add the artist to the song instance because a song belongs to the artist

life_on_mars = Song.new("Life on Mars", david)
golden_years = Song.new("Golden Years", david)
bohemian_rhapsody = Song.new("Bohemian Rhapsody", queen)
radio_ga_ga = Song.new("Radio Ga Ga", queen)

david = Artist.new("David Bowie")
queen = Artist.new("Queen")

binding.pry
0