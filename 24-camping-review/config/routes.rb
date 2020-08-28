Rails.application.routes.draw do
  get '/campers', to: "campers#index", as: "campers"
  get '/campers/:id', to: 'campers#show', as: "camper"
  get '/activities', to: "activities#index", as: "activities"

  # resources :signups, only: [:index, :new, :create]
  get "/signups", to: "signups#index", as: "signups"
  get "/signups/new", to: "signups#new", as: "new_signup"
  post "/signups", to: "signups#create"

end
