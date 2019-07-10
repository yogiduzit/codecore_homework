Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # This defines a route that says on a GET request to the
  # root domain, run the index action of WelcomeController.
  get('/', {to: 'welcome#index', as:'root' });
  get '/contacts/new', {to: 'contacts#new' };

  get '/questions/new', {to: 'questions#new', as: :new_question}

  get '/questions/:id', {to: 'questions#show', as: :question}
  get '/questions', {to: 'questions#index', as: :questions}
  get '/questions/:id/edit', {to: 'questions#edit', as: :edit_question}

  # Handles the creation of new contacts
  post '/contacts', {to: 'contacts#create'}

  post '/questions', {to: 'questions#create'}

  # Update question
  patch '/questions/:id', {to: 'questions#update'}

  resources :questions do 
    # Passing into a block appends /question
    # to the route
    resources :answers, only: [:create, :destroy]
  end

  resources :users, only: [:new, :create]
  resource :sessions, only: [:new, :create, :destroy]

  resources :job_posts, only: [:new, :create, :show, :destroy]
  
end
