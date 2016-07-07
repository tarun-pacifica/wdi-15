class RenameMixtapesIdInGenresMixtapes < ActiveRecord::Migration
  def change
    rename_column :mixtapes_songs, :mixtapes_id, :mixtape_id
  end
end
