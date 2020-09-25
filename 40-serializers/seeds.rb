eric = Teacher.create(name: "Eric", subject: "Math")
sylwia = Teacher.create(name: "Sylwia", subject: "Chemistry")

geo = Classroom.create(name: "Geometry", teacher: eric)
numbers = Classroom.create(name: "Numbers", teacher: eric)

chem = Classroom.create(name: "Nuclear Chem 500", teacher: sylwia)

Assignment.create(name: "Pythagorean Theorem", classroom: geo)
Assignment.create(name: "Counting 101", classroom: numbers)

Assignment.create(name: "Fission", classroom: chem)
Assignment.create(name: "Fusion", classroom: chem)
