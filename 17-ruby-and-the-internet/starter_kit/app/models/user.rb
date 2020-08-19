class User < ActiveRecord::Base
  has_many :fav_jokes
  has_many :jokes, through: :fav_jokes

  include Themes

  def show_jokes?
    # 🔥 what you see below is called "guard class" -- a one-line if statement that provides a fast return if the condition is not met; I could write this method in an if/else statement, too
    return no_favs if self.jokes.length == 0
    # 🔥 notice this: the ".show_favs" method is located on the User model!
    show_favs
  end

  def save_joke(joke_instance)
    FavJoke.create(user_id: self.id, joke_id: joke_instance.id)
    puts "Joke saved to favs!"
    sleep(0.3)
  end

  private

  def no_favs
    # 🔥 notice this: the "alert_theme" method is located in a Themes module that's required at the top! Module is like a tool box where all the tools/methods of the same kind belong to
    alert_theme(["You have no fav jokes yet!", "Let's change that!"])
  end

  def show_favs
    joke_contents_arr = jokes.pluck(:content)
    mix_theme(joke_contents_arr)
  end

end
