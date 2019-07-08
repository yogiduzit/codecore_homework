class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
       # Adding an index to email makes ordering data easier.
      t.string :email, index: {unique: true}

      # password_digest is a special name which is used by the
      # has_secure_password method in the User class.
      t.string :password_digest

      t.timestamps
    end
   
  end
end
