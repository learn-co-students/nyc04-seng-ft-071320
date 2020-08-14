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

### GOAL:

```
Category :name 
  |
  ^
Plant -< PlantParenthood >- Parent
                  |
                  ^
                Watering
```