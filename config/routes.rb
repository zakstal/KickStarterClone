KickStarter::Application.routes.draw do

  root to: "api/static_pages#root"
  # root to: 'users#index'
  resources :users do
    resources :user_bio, only: [:new]
  end
  resource :session

  namespace :api, defaults: { format: :json} do
    get '/get_current_user', as: :get_current_user, to: 'static_pages#get_current_user'
    resources :projects, only: [:show]
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
