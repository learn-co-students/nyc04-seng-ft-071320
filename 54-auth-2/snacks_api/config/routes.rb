Rails.application.routes.draw do
    post "/users/login", to: "users#login"
    post "/users", to: "users#create"
    get "/users/keep_logged_in", to: "users#keep_logged_in"

    post '/snacks', to: 'snacks#create'
end
