class CreateTosses < ActiveRecord::Migration
  def change
    create_table :tosses do |t|
    	t.string :team_a
    	t.string :team_b
      t.timestamps null: false
    end
  end
end
