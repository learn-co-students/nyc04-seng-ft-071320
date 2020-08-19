# Joke App Source Code

## Table of contents:
- [Learning goals 📚](#learning-goals)
- [Outline 🗺](#outline)
- [Spider quiz 🕷](#spider-quiz)
- [Domain model ⿻](#domain-model)
- [Easy definitions 📖](#easy-definitions)
- [Dad Jokes API 🤡](#dad-jokes-api)
- [More APIs 👾](#more-apis)
- [Pseudocoding standard requests 💻](#pseudocoding-standard-requests)
- [Pseudocoding other requests 💻](#pseudocoding-other-requests)
- [Pseudocoding scraping 🖥](#pseudocoding-scraping)
- [Read more 🤓](#read-more)

---

## Learning goals
* [ ] Recognize the parts of the request-response lifecycle:
    * [ ] Define client and describe setting up the request
    * [ ] Define server and describe how the response is formatted
    * [ ] Identify HTML as a response type
    * [ ] Identify and define JSON
* [ ] Define Application Programming Interface (API)
    * [ ] Explain the uses of an API on the internet
* [ ] Understand the process of making GET requests to an API and parsing and examining the result
* [ ] Understand the process of making GET requests when web scraping
* [ ] Experience the process of making a POST request through web scraping

## Outline
- [Spider quiz 🕷](#spider-quiz)
- Codebase questions time
- Intro to the Internet
- Google Books API 
- Dad Jokes API docs
- Let's bring in some jokes to our app!
- Not enough jokes? Let's release a crawling spider! 
- Black Mirror accent

## Spider quiz:
- `brew cask install chromedriver` (or, if that errors out: brew install chromedriver)
- `cd ./starter_kit`
- `rake spider`
- in breakout rooms, discuss and fill out the prompts and general code organization
- do not close the CLI, just follow the prompts

## Domain model
![](jokeApp.png)
User -< UserJoke >- Joke

## Easy definitions
* **Request:** what you ask the server to do for you
    - **GET request**: you want to Read some information
    - **POST request**: you want to Create an entry
* **Response:** server's reaction to your request
* **Client:** the person or bot that makes the request
* **Server:** the destination of the request
* **URI:** a website locator, a broader term for URL
* **URL:** a type of URI
* **JSON:** JavaScript Object Notation, or JS syntax for objects (hashes)
* **API:**
> Suppose you're the HR manager of a company, and Mr. XYZ has applied to your company. In his resume, he has stated that he achieved the highest score in the subjects "Machine Learning" and "Natural Language Processing" while pursuing his bachelors in Computer Science.

> Before you hire him, you want to verify Mr. XYZ's claims. I am the registrar of the university that awarded the bachelor's degree to Mr. XYZ. I keep all the records of students' marks and grades.

> One option before me is to make my entire student database publicly available, so that prospective employers can do a background check on my students. However, this poses many problems:

> **Privacy:** Most students won't like the details of all their grades being made public. The professors are also worried that the other universities will analyze the database, and poach the most brilliant students in every area for their own research programmes.

> **Security:** The schema of my database will be publicly available, and might help the hackers to easily exploit security vulnerabilities in the various university applications that use this database.

> **Complexity for you:** You will have to spend a lot of time understanding the database structure and finding out the records of Mr. XYZ and his batchmates, and then comparing the grades to confirm that Mr. XYZ was awarded the highest score in the specified subjects

> **Complexity for me:** There are hundreds of employers who will overwhelm me with thousands of different types of queries.

>So, I've a solution. I make available a standard form, which lists what kind of information is available to the employers wanting to do background checks on my students. I also list the information that you need to provide for each type of query. For example:
> - The query "Did this student score the highest marks in the specified subject?" requires you to give me subject name, student name, degree name and year
> - The query "Was this student awarded a Master's degree in Electrical Engineering from your university?" If yes, what was his CGPA?" requires you to give me student name, degree name and year.

> I may also list some requirements you need to satisfy before you can apply for access to this information (e.g. Bring your company ID card to prove you're a legit HR manager, or a processing fee of $10).

> This standard form is the API. The requirement of company ID card or processing fee is an API key. If you've the API key, you can give me some details (e.g. student name, degree) and get corresponding information for it (e.g. CGPA or "No such student exists in our records.")

> A system's API allows the API user to avoid the hassle of understanding the complex system fully. It also allows the API publisher to make certain information accessible to others in a standard way, without compromising the security, privacy or confidentiality of the system.

> For example, suppose you are developing a Windows software which requires "Print document" functionality. Now, this complex functionality has already been implemented by Microsoft. Microsoft doesn't want to give you the Windows source code, but wants to make it easy for you to develop applications for their OS. So, it makes available a set of APIs. You can provide Windows information like "What to print?" -- Windows will do the actual job of sending the document to the printer, and tell you whether it was successful or not.

> Similarly, Facebook wants you to develop interesting apps for its users. But, it cannot risk sharing all the details of its users with you (privacy/security concerns, you can create a competing social network with this information etc.). So, it makes available an API instead.

## Dad Jokes API
- [Dad Jokes API Docs](https://icanhazdadjoke.com/api)
- [Sample API Request](https://icanhazdadjoke.com/api#fetch-a-random-dad-joke)

## More APIs
- [More APIs](https://rapidapi.com/collection/cool-apis)
- [And even more APIs](https://medium.com/@vicbergquist/18-fun-apis-for-your-next-project-8008841c7be9)

## Pseudocoding standard requests
1. save the response to a variable
    ```ruby
        response = RestClient.get(url)
    ```
2. save the response body to a variable
    ```ruby
        body = response.body
    ```
3. convert the body into a hash
    ```ruby
        parsed = JSON.parse(body)
    ```

## Pseudocoding other requests
1. parse the URL
    ```ruby
        uri = URI.parse(url)
    ```
2. save the request to a variable
    ```ruby
        request = Net::HTTP::Get.new(uri)
    ```
3. if the documentation requires it, set an accept header to text/plain
    ```ruby
        request["Accept"] = "text/plain"
    ```
4. if the documentation requires it, set options to a hash with the ssl key
    ```ruby
        req_options = {
        use_ssl: uri.scheme == "https",
        }
    ```
5. now, parse the response to our request
    ```ruby
        response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
            http.request(request)
        end
    ```

6. See what you're getting:
    ```ruby
        resp = response.body
    ```

## Pseudocoding scraping
1. Add 'kimurai' gem in the gemfile (and bundle)
2. Create a scraper Class that inherits from 'Kimurai::Base'
    ```ruby
        class DadJokesScraper < Kimurai::Base
        end
    ```
3. Each scraper needs these elements:
    ```ruby
        class DadJokesScraper < Kimurai::Base
            @@base_url = "https://www.countryliving.com/life/a27452412/best-dad-jokes/"
            @name= 'dad_jokes'
            @start_urls = [@@base_url]
            @engine = :selenium_chrome

            def parse(response, url:, data: {})
                #code for what to do with the website
            end
        end
    ```
4. Use kimurai methods to do the job, e.g.:
    - `browser.current_response` - to access the html of the page in the base url
    - `doc.css()` - to find html/css element(s) in that html (it needs a css selector as an arg)
    - `browser.find()` - to find a specific element, using an xpath (check my code, my blog or the docs to learn about it)
    - `browser.fill_in` - if you want to fill in a form (check my code or docs to learn about the args)
    - `click` - if you want to click on something
    - `browser.save_screenshot` - if you want to see how the job is being done

## Read more
- Sylwia's patient [web scraping walkthrough](https://www.scrapingbee.com/blog/web-scraping-ruby/)
- Eric the Dad's blog [on ancestry, inheritance and modules in Ruby](https://medium.com/@hyeokjungkim/ruby-ancestry-d7f5d808e7d7)
- Explain it like I'm 5: [api by nick nish](https://www.nicknish.co/blog/explain-it-like-im-5-api)
