KickStarter::Application.routes.draw do

  root to: "static_pages#root"
  # root to: 'users#index'
  resources :users do
    resources :user_bio, only: [:new]
  end
  resource :session

  namespace :api, defaults: { format: :json} do
    get '/cuser', as: :cuser, to: 'users#cuser'
  end
  resources :user_bio, only: [:create, :edit, :update, :destroy]
  resources :catagories, only: [:index, :show]
  resources :projects, only: [:new, :create, :edit, :update, :destroy, :show] do
    resources :rewards, only: [:new, :index]
    resources :stories, only: [:new, :index]
  end
  resources :rewards, only: [:create, :edit, :update, :destroy]
  resources :stories, only: [:create, :edit, :update, :destroy]
  resources :claimed_rewards, only: [:create]
end
