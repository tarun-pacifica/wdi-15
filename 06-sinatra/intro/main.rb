require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
  "Hello world"
end

get '/goodbye' do
  "Goodbye World"
end

get '/name/:first' do
  "Hi #{ params[:first].capitalize }"
end

get '/name/:first/:last' do
  "Hello #{ params[:first].capitalize } #{ params[:last].upcase }"
end

get '/name/:first/:last/:age' do
  "Greetings #{ params[:first] } #{ params[:last] }. You are #{ params[:age] }."
end

get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result of #{ params[:x] } multiplied by #{ params[:y] } is #{ result }"
end
