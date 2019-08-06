Rails.application.routes.draw do
  devise_for :users
  resources :favorites
  resources :trips
  resources :stops
  resources :walks
  resources :landmarks
  
  root to: "home#index"
end
