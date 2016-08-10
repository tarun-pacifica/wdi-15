class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse

    respond_to do |format|
      format.html # Nothing here means "do as you normally would"
      format.json { render :json => @fruits }
    end
  end
end
