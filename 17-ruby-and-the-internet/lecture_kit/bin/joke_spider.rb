class JokeSpider < Kimurai::Base
    @@prompt = TTY::Prompt.new
    @@base_url = "https://sylwiavargas.typeform.com/to/kHFxI9Bq"
    @@answers = {first: "", second: "", third: "", fourth: ""}
    @@q_hash = [
        {num: "first", q: "What's your name?", xpath: "/html/body/div[3]/main/div[1]/div[2]/div[2]/div/div/div/div[1]/section/div/div/div/div/div/div/div[2]/div/div/div/div[2]/div/div/button"}, 
        {num: "second", q: "Seed.rb, line 19: what does this line do?", xpath: "/html/body/div[3]/main/div[1]/div[2]/div[2]/div/div/div/div[2]/section/div/div/div/div/div/div/div[2]/div[3]/div/div/div[2]/div/div/button"}, 
        {num: "third", q: "joke_app.rb, line 3: what are Themes and CliControls?", xpath: "/html/body/div[3]/main/div[1]/div[2]/div[2]/div/div/div/div[3]/section/div/div/div/div/div/div/div[2]/div[3]/div/div/div[2]/div/div/button"}, 
        {num: "fourth", q: 'joke_app.rb, line 49: where is "alert_theme" method located?', xpath: "/html/body/div[3]/main/div[1]/div[3]/div[2]/div/div/div/div[4]/section/div/div/div/div/div/div/div[2]/div[3]/div/div/div[1]/div/div[1]/div/div/button"}]
    @name= 'scavenger'
    @start_urls = [@@base_url]
    @engine = :selenium_chrome

    def parse(response, url:, data: {})
        run
    end

    def run
        get_answers
        fill_out_the_form
        goodbye
    end

    def goodbye
        puts "🤡"*1000
    end

    def get_answers
        @@q_hash.each{|h| get_answer(h[:num], h[:q])}
        system 'clear'
        puts "stand by!"
        sleep(0.6)
    end

    def get_answer(num_str, question)
        system 'clear'
        puts "✨ ✨ ✨ #{num_str.upcase} QUESTION ✨ ✨ ✨"
        sleep(0.5)
        @@answers[num_str.to_sym] = @@prompt.ask(question)
    end

    def fill_out_the_form
        @@q_hash.each do |h| 
            browser.fill_in(h[:q], with: @@answers[h[:num].to_sym])
            browser.save_screenshot
            click_the_button(h[:xpath])
        end
        browser.save_screenshot
    end

    def click_the_button(str)
        browser.find(:xpath, str).click
    end

end

# JokeSpider.crawl!
