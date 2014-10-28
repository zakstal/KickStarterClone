KickStarter::Application.routes.draw do
  resources :users do
    resources :user_bio, only: [:new]
  end
  resources :user_bio, only: [:create, :edit, :destroy]
  resource :session
end
