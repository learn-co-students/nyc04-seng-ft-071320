Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/students", to: "students#index", as: "students"
  get "/students/:id", to: "students#show", as: "student"

end
