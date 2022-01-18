Rails.application.routes.draw do
  


  resources :books

  resources :list_books

  resources :reading_lists, only: [:index, :show, :destroy, :create, :update] do 
    post :add_book
    delete :remove_book
  end
  
  resources :notes
  resources :users, only: [:create]
 
  # test route for setup
  get '/hello', to: 'application#hello_world'
  # Login route
  post "/login", to: "sessions#create"
  # Logout route
  delete "/logout", to: "sessions#destroy"
  # Home page route
  get "/me", to: "users#show"
  # signing up route
  post '/signup', to: 'users#create'

  post '/Reading_list', to: 'user#index'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
