KickStarter::Application.routes.draw do

  root to: "api/static_pages#root"
  # root to: 'users#index'
  resources :users do
    resources :user_bio, only: [:new]
  end
  resource :session, only: [:new, :create]
  get "/session", to: "sessions#destroy"

  namespace :api, defaults: { format: :json} do
    get '/users', as: :get_current_user, to: 'users#get_current_user'
    resources :users, only: [:gest_current_user,:create, :update]
    resources :projects, only: [:show, :create, :update]
    resources :rewards, only: [:create, :show]
    resources :claimed_rewards, only: [:create]
    resources :catagories, only: [:show]
    resources :stories, only: [:create, :update]
    resources :comments, only: [:create, :show]
    resource :session, only: [:create, :destroy]
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
