Rails.application.routes.draw do
  devise_for :users
  resources :favorites
  resources :trips
  resources :stops
  resources :walks
  resources :landmarks
  
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: "pages#root"
  
end
