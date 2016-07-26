Rails.application.routes.draw do
  root :to => 'secrets#landing'
  resources :secrets
end
