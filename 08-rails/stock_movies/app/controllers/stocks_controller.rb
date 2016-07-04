class StocksController < ApplicationController
  def index
  end

  def lookup
    @symbol = params[:symbol].upcase
    return redirect_to root_path if @symbol.empty? # You are not expected to understand this
    stock_info = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)
    @price = stock_info[@symbol].lastTrade
  end
end
