require_relative '../config/dad_jokes_scraper'

User.destroy_all
Joke.destroy_all
FavJoke.destroy_all
User.reset_pk_sequence
Joke.reset_pk_sequence
FavJoke.reset_pk_sequence

u1 = User.create(username: "eric the dad")
j1 = Joke.create(content: "How did the programmer die in the shower? They read the shampoo bottle instructions: Lather. Rinse. Repeat.")
j2 = Joke.create(content: "Two bytes meet.  The first byte asks, “Are you ill?” The second byte replies, “No, just feeling a bit off.”")
j3 = Joke.create(content: "What’s the best thing about Switzerland? I’m not sure, but their flag is a big plus")
j4 = Joke.create(content: "How do you keep a bagel from getting away? You put lox on it")

$scraped_jokes = []

DadJokesScraper.crawl!

$scraped_jokes.flatten.each do |joke|
    content = joke.text
    Joke.find_or_create_by(content: content)
    puts "This joke was created: #{content}"
end 



###### MAGIC TIME! #######
### you could either create a joiner instance:
# joiner = UserJoke.create(user_id: u1.id, joke_id: j1.id)
### or...

u1.jokes << j3
### explanation: "<<" will create and save a new joiner instance if the associations are set up correctly
u1.jokes.push(j4, j2)
### and if you want to push a couple of instances at the same time, use '.push'

puts " 🤡 🤡 🤡 DONE DONE DONE 🤡 🤡 🤡 "
