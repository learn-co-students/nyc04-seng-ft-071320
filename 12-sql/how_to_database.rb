require 'sqlite3'
require 'pry'

query = "
SELECT artists.name, albums.title, COUNT(tracks.id) FROM artists
JOIN albums
on albums.artist_id = artists.id
JOIN tracks
ON tracks.album_id = albums.id
GROUP BY albums.id
ORDER BY COUNT(tracks.id) DESC"

$db = SQLite3::Database.new('chinook.db')
returnVariable = $db.execute(query)

binding.pry
0
