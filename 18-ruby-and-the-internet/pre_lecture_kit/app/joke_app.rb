class JokeApp
  attr_reader :user
  include Themes, CliControls

  def run
    welcome
    login_or_signup
    wanna_see_favs
    joke_prompt
    goodbye
  end

  private

  def welcome
    puts "Howdy! Are you ready for some jokes?"
    sleep(0.3)
  end

  def login_or_signup
    username = down_ask("Enter your username to sign up/log in:")
    @user = User.find_or_create_by(username: username)
  end

  def wanna_see_favs
    # 🔥 notice this: the "yes_no" method is located in a CliControls module that's required at the top! Module is like a tool box where all the tools/methods of the same kind belong to
    answer = yes_no("Wanna see your fav jokes?")
    # 🔥 notice this: the ".show_jokes" method is located on the User model!
    return @user.show_jokes? if answer
  end

  def joke_prompt
    subject = down_ask("What do you want to hear a joke about? \n🤩 Write 'random' to see a random joke 🤩")
    sleep(0.1)
    get_joke(subject)
  end

  def get_joke(subject)    
    system 'clear'
    # get a random joke or find a joke that contains subject
    subject.downcase == "random" ? joke = Joke.all.sample : joke = Joke.where("content LIKE ?", "%" + subject + "%").sample
    # if the response is nil or not:
    joke.nil? ? no_jokes_available : joke_available(joke)
    # ask if to show another joke
    another_one?
  end

  def no_jokes_available
    alert_theme(["There are no jokes about it!\n", "Let's try again!"])
    sleep(0.3)
    joke_prompt
  end

  def joke_available(joke_instance)
    mix_theme([joke_instance.content])
    save_joke?(joke_instance)
  end

  def save_joke?(joke_instance)
    preference = yes_no("Do you want do save this joke?")
    return @user.save_joke(joke_instance) if preference
  end

  def another_one?
    prompt = $next_joke_arr.sample
    answer = yes_no(prompt)
    answer ? joke_prompt : nil
  end

  def goodbye
    puts "🤡"*100 + " bye bye 🤡 🤡 🤡"
    system 'exit'
  end

end