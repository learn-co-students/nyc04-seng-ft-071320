Rails.application.routes.draw do
  
  get "/teachers", to: "teachers#index", as: "teachers"
  get "/teachers/:id", to: "teachers#show", as: "teacher"
  post "/login", to: "teachers#login"
  post "/assignments", to: "assignments#create"

end
