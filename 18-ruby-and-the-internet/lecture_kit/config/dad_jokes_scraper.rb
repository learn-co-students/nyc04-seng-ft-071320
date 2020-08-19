class DadJokesScraper < Kimurai::Base
    @@base_url = "https://www.countryliving.com/life/a27452412/best-dad-jokes/"
    @name = "dad_jokes"
    @start_urls = [@@base_url]
    @engine = :selenium_chrome

    def parse(response, url:, data: {})
        doc = browser.current_response
        $scraped_jokes << doc.css(".body-ul li")
    end

end