require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

# Root path
get '/' do
  erb :form
end

get '/lookup' do
  @symbol = params[:symbol].upcase

  if @symbol.empty?
    redirect to('/')
  else
    info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)
    @price = info[@symbol].lastTrade
    erb :lookup
  end

end
