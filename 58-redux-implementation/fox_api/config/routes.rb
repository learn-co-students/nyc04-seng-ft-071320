Rails.application.routes.draw do
  get "/foxes", to: "foxes#index"
  post "/login", to: "users#login"
  post "/pets", to: "pets#create"
  get "/keep_logged_in", to: "users#keep_logged_in"
end
