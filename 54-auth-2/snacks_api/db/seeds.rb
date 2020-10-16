eric = User.create(username: "Eric", password: "abc123")
annie = User.create(username: "Annie", password: "abc123")

annie.snacks.create(name: "Bubble Tea")


eric.snacks.create(name: "Chicken")
eric.snacks.create(name: "Taco")
