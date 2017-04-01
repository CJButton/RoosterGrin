


class AddEmailColumn < ActiveRecord::Migration
  def change
    add_column :patients, :email, :string
  end
end
# add_column :movies, :director, :string
