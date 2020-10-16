Rails.application.routes.draw do
    post "/users/login", to: "users#login"
    post "/users", to: "users#create"
end
