# Steps for A Rails API

0. `rails new project_name --api --database=postgresql`
1. Uncomment `rack-cors`
2. Uncomment `config/initializers/cors.rb` && change to "*"
3. Generate your models
4. Write in the AR macros
5. Create & Migrate
6. Seed
7. Test your code
8. Write in your routes/actions