Rails.application.routes.draw do
  get "/toys", to: "toys#index"
  post "/toys", to: "toys#create"
  patch "/toys/:id", to: "toys#update"
end
