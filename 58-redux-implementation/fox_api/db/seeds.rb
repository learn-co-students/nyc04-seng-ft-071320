20.times do |i|
    Fox.create!(
        species: Faker::Creature::Animal.name, 
        image: "https://randomfox.ca/images/#{i+1}.jpg"
    )
end


eric = User.create!(username: "Eric", password: "abc123")


5.times do
    Pet.create!(user: eric, fox: Fox.all.sample, nickname: Faker::Name.name, health: rand(5))
end