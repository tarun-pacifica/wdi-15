class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :title
      t.string :author
      t.text :content

      t.timestamps null: false
    end
  end
end
