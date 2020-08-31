puts "cleaning out the records... "

Student.destroy_all
Word.destroy_all

puts "creating students..."
eric = Student.create(first_name: "Eric", last_name: "Kim", age: 50_000)
sylwia = Student.create(first_name: "Sylwia", last_name: "Vargas", age: 30)
annie = Student.create(first_name: "Annie", last_name: "Zheng", age: 8_999_999)
isabel = Student.create(first_name: "Isabel", last_name: "Lee", age: 8_999_999)
nunny = Student.create(first_name: "Nunny", last_name: "Reyes", age: 8_999_999)

puts "creating words..."
model = Word.create(content: "Model")
controller = Word.create(content: "controller")
params = Word.create(content: "params")
strong_params = Word.create(content: "strong params")

puts "📚 📚 📚  let the show begin 📚 📚 📚 "