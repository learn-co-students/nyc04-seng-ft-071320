Rails.application.routes.draw do
  get "/foxes", to: "foxes#index"
  post "/login", to: "users#login"
  get "/keep_logged_in", to: "users#keep_logged_in"
end
