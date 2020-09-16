require 'restclient'

puts "hello"
sleep 2
puts "goodbye"


# do some stuff

puts "before"
puts RestClient.get("https://dog.ceo/api/breeds/image/random").body
puts "after"

# print out the results
