module CliControls

    @@prompt = TTY::Prompt.new

    # Overwriting the "yes?" method given by TTY prompt to have custom answers
    def yes_no(question_str)
        @@prompt.yes?(question_str) do |q|
        q.suffix "Yup!/Nope, I'm boring"
        q.positive "Yup!"
        q.negative "Nope, I'm boring"
        end
    end

    # A method for downcasing an ask
    def down_ask(str)
        @@prompt.ask(str).downcase
    end

    # Making a string available to the whole app; it could be a global variable instead
    def joke_url
        "https://icanhazdadjoke.com/"
    end

    $next_joke_arr = ["Wanna hear another one?", "Wanna one more?", "Wanna more laughs?"]
    $returned_jokes = []
end