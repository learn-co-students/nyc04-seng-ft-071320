sylwia = User.create(username: "Sylwia")
eric = User.create(username: "Eric")
annie = User.create(username: "Annie")

js = Blog.create(title: "CRUD with JS", content: "Do some fetch", user_id: sylwia.id)

rails_form = Blog.create(title: "Rails Form For", content: "Do some CRUD", user: sylwia)

pigs = Blog.create(title: "I love pigs", content: "Oink oink oink", user: eric)


Comment.create(content: "Great blog, Sylwia", user: annie, blog: rails_form)
Comment.create(content: "I love pigs too", user: annie, blog: pigs)
Comment.create(content: "I loved it so much, I came back for a second comment", user: annie, blog: rails_form)
Comment.create(content: "Excellent blog, Sylwia", user: eric, blog: rails_form)