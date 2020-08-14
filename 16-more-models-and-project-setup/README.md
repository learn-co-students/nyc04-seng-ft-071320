More Models + Project Setup
---

## SWBATs
- [ ] Practice designing a more complex/robust ERD
- [ ] Practice pseudocoding
- [ ] Become comfortable with different ways of designing seed data
- [ ] Become aware of Faker gem
- [ ] Understand the project setup process
- [ ] Uderstand the beauty of TTY Prompt




### Current ERD:

```
            Plant —————< PlantParenthood >————————— Parent
             :name       :affection (int)         :name
             :color      :favorite(bool)          :free_time
             :bought(date)                        :age
```

### PlantParenthood App
CRUD:
* CREATE
- a User will be able to create [something]
* READ
- a User will be able to see all available plants
- a User will be able to see plants of specific category only
*categories include*: "succulent", "leafy", "outdoor", "indoor", "herb"
* UPDATE
- a User will be able to increase their affection towards the plant
* DELETE
-  ...?




### GOAL:

```
Category
  |
  ^
Plant -< PlantParenthood >- Parent   
```

TASK:
- pseudocode the steps I need to take to implement a new model into the existing setup