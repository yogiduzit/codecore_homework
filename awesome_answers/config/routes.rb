Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # This defines a route that says on a GET request to the
  # root domain, run the index action of WelcomeController.
  get('/', {to: 'welcome#index', as:'root'});
  get '/contacts/new', {to: 'contacts#new' };
  get('/questions/new', {to: 'questions#new', as: 'new_question'})

  # Handles the creation of new contacts
  post '/contacts', {to: 'contacts#create'}
  post 'questions', {to: 'questions#create', as: :questions}

  
end
