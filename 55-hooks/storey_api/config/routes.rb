Rails.application.routes.draw do
  resources :stores
  resources :drinks, only: [:create]
  
end
