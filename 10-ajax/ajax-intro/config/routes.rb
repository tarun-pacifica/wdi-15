Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/time' => 'pages#time'
  get '/bros' => 'pages#bros'
  get '/lotto' => 'pages#lotto'
  get '/info' => 'pages#info'
end
