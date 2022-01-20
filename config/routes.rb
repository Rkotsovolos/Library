Rails.application.routes.draw do
  


  resources :books, only: [:index, :show, :create] do 
    post :add_note
    delete :remove_note

  end

  resources :book_lists

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

 


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
