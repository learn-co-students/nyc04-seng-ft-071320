Plant.destroy_all
Person.destroy_all
PlantParenthood.destroy_all
Plant.reset_pk_sequence
Person.reset_pk_sequence
PlantParenthood.reset_pk_sequence

basil = Plant.create(name: "basil the herb", bought: 20200610, color: "green")

corn_tree = Plant.create(name: "Corn Tree", bought: 20170203, color: "green")

sylwia = Person.create(name: "Sylwia", free_time: "none", age: 30)
joel = Person.create(name: "Joel", free_time: "none", age: 780)

pp1 = PlantParenthood.create(plant_id: basil.id, person_id: sylwia.id, affection: 1_000_000, favorite?: true)

pp2 = PlantParenthood.create(plant_id: corn_tree.id, person_id: sylwia.id, affection: 1_000_000, favorite?: true)

pp3 = PlantParenthood.create(plant_id: corn_tree.id, person_id: joel.id, affection: 0, favorite?: false)


puts "🔥 🔥 🔥 🔥 "