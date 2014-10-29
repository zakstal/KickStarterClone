KickStarter::Application.routes.draw do
  root to: "sessions#new"
  resources :users do
    resources :user_bio, only: [:new]
  end
  resources :user_bio, only: [:create, :edit, :update, :destroy]
  resource :session
  resources :catagories, only: [:index, :show]
  resources :projects, only: [:new, :create, :edit, :update, :destroy, :show] do
    resources :rewards, only: [:new, :index]
  end
  resources :rewards, only: [:create, :edit, :update, :destroy]
end
