require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :calc
end

get '/about' do
  erb :about
end

get '/calc' do
  erb :calc
end

get '/result' do
  @first = params[:first].to_f
  @second = params[:second].to_f

  @result = case params[:operator]
  when '+' then @first + @second
  when '-' then @first - @second
  when '*' then @first * @second
  when '/' then @first / @second
  end

  erb :calc
end

# get '/calc/multiply/:x/:y' do
#   @result = params[:x].to_f * params[:y].to_f
#   erb :calc
# end
#
# get '/calc/add/:x/:y' do
#   @result = params[:x].to_f + params[:y].to_f
#   erb :calc
# end
