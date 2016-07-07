class CreateMixtapesSongs < ActiveRecord::Migration
  def change
    create_table :mixtapes_songs do |t|
      t.integer :song_id
      t.integer :mixtapes_id
    end
  end
end
