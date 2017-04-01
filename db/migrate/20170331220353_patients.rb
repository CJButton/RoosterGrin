


class Patients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.integer :patient_id, null: false, unqiue: true
      t.index :patient_id
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number, null: false
      t.index :phone_number
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false

      t.timestamps null: false
    end
  end
end
