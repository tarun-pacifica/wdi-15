Rails.application.routes.draw do
  get '/hello' => 'pages#hello'
  get '/faq' => 'pages#faq'
  get '/about' => 'pages#about'
  get '/lol' => 'pages#lol'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calc'
end
