20.times do |i|
    Fox.create!(
        species: Faker::Creature::Animal.name, 
        image: "https://randomfox.ca/images/#{i+1}.jpg"
    )
end