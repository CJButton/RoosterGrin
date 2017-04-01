


class AddNullConstraint < ActiveRecord::Migration
  def change
    change_column :patients, :email, :string, :null => false
  end
end
