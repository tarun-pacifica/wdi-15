class MoviesController < ApplicationController
  def index
  end

  def lookup
    url = "http://omdbapi.com/?t=#{ params[:title] }"
    @info = HTTParty.get url
    return redirect_to root_path if @info['Response'] == 'False'
  end
end
