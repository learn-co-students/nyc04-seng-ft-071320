Rails.application.routes.draw do
  post "/foxes", to: "foxes#create"
  get '/foxes/random', to: "foxes#random"
  resources :foxes, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
