require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
  belongs_to :plant
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{ butterfly.id }")
end

# Show
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

# Edit
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# Update
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to('/butterflies/' + params[:id])
end

# Delete
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end

# Index
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

get '/plants/new' do
  erb :plants_new
end

post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# Show
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

# Edit
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# Update
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

# Delete
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
end
