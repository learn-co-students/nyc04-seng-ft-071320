arrayOfStores = [
    {
        storeName: "Gong Cha", 
        orders: rand(50)
    },
    {
        storeName: "Vivi", 
        orders: rand(50)
    },
    {
        storeName: "Yayas", 
        orders: rand(50)
    },
    {
        storeName: "Tiger Sugar",
        orders: rand(50)
    }
]

Store.create(arrayOfStores)

20.times do 
    Drink.create(name: Faker::Coffee.blend_name, store: Store.all.sample)
end