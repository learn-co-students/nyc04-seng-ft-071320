Rails.application.routes.draw do
  get '/campers', to: "campers#index", as: "campers"
  get '/activities', to: "activities#index", as: "activities"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
