Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/stock' => 'stocks#index'
  get '/stock/lookup' => 'stocks#lookup'

  get '/movie' => 'movies#index'
  get '/movie/lookup' => 'movies#lookup'
end
