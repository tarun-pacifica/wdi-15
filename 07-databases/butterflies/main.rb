require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/butterflies' do
  @butterflies = query_db "SELECT * FROM butterflies"
  erb :butterflies_index
end

get '/butterflies/new' do
  erb :butterflies_new
end

post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  query_db query
  redirect to('/butterflies')
end

# Show
get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  @butterfly = @butterfly.first # Extract the butterfly hash from the array
  erb :butterflies_show
end

# Edit
get '/butterflies/:id/edit' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  @butterfly = @butterfly.first # Extract the butterfly hash from the array
  erb :butterflies_edit
end

# Update
post '/butterflies/:id' do
  query = "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to('/butterflies/' + params[:id])
end

# Delete
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id = #{ params[:id] }"
  redirect to('/butterflies')
end

def query_db(sql)
  db = SQLite3::Database.new 'database.db' # Establish connection to the database
  db.results_as_hash = true

  puts sql

  result = db.execute sql # Actually run the sql against the database
  db.close # Close the database connection so we don't run out of connections
  result # Finally, return the result
end
