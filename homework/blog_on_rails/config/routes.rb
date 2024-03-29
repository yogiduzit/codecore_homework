Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/", {to: "posts#home", as: "root"}

  resources :posts do
    resources :comments, only: [:create, :destroy]
  end
  
end
