class Interface
    attr_reader :prompt
    attr_accessor :user

    def initialize
        @prompt = TTY::Prompt.new
    end

    def welcome
        # self -> instance of the Interface

        # choice = prompt.select("Welcome to our Application. What would you like to do?", ["See All Plants", "See All Categories", "Create A User"])

        # if choice == "See All Plants" 

        # elsif choice == "See All Categories"

        # end

        prompt.select("What would you like to do?") do |menu|
            menu.choice "See All Plants", -> { puts "You chose choice 1" }
            menu.choice "See All Category", -> { puts "You chose choice 2"}
            menu.choice "Create a User", -> { user_register_helper }
        end

    end

    def user_register_helper
       personReturnValue = Person.register()
       until personReturnValue
            personReturnValue = Person.register()
       end
       self.user = personReturnValue
       self.main_menu
    end


    def main_menu
        user.reload #makes sure that we get the most up to date info
        system "clear" #pushes this to the top of the terminal
        puts "Welcome, #{self.user.name}"
        prompt.select("Choose something to do") do |menu|
            menu.choice "See My Plants", -> {display_person_plants}
            menu.choice "ADD A PLANT", -> { display_and_add_plants }
        end
    end

    def display_person_plants
        # self.user <- Person who is logged in
        # self.user.plants <- All of the plants associated with the User
        # self.user.plant_parenthoods <- All of the PlantParenthood instances 
        
        self.user.plant_parenthoods.each do |uph|
            puts uph.plant.name
            puts uph.affection
            puts "*******"
        end

        sleep 5
        self.main_menu
        # self.main_menu <- To take me back to the main_menu
    end


    def display_and_add_plants
        # Plant.all_names => [{name => id}, {name => id}]

        chosen_plant_id = prompt.select("Choose A Plant Please", Plant.all_names)
        fav = prompt.yes?("Do you care for this plant?")

        plantPH = PlantParenthood.create(person_id: self.user.id, plant_id: chosen_plant_id, favorite?: fav, affection: rand(10))

        main_menu
   
    end

end