def img_link num
    "https://randomfox.ca/images/#{num}.jpg"
end 

names = ["Snowy",
"Snowball",
"Fluffy",
"Fur Ball",
"Puffy",
"Bear",
"Snow",
"Curly",
"Teddy",
"Teddy Bear",
"Silky",
"Fleecy",
"Shaggy",
"Poof",
"Poofy",
"Cloud",
"Cloudy",
"Fuzz"]

i = 10

names.map do |name|
    Fox.create(name: name, img_url: img_link(i))
    i = i + 1
end