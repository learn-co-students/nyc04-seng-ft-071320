Rails.application.routes.draw do
    get "/burgers", to: "burgers#index"
    get "/keep_logged_in", to: "users#keep_logged_in"
    post "/login", to: "users#login"
    get "/users/:id", to: "users#show"
end
