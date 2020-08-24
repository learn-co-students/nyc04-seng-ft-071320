Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # HTTPVERB "/URL", to: "controllerNAME#method"
  # GET, POST, PATCH, PUT, DELETE

  get "/test", to: "application#eric"
  post "/test", to: "application#sylwia"
end
