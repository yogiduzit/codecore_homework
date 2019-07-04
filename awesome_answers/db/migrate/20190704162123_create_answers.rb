class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.text :body
      t.references :question, foreign_key: true
      # The above line creates a 'question_id' column of type 'bigint' that refers 
      # the id of the question this answer belongs to.

      # If you associate an answer to a question, you won't be able 
      # delete the question easily.

      # As of Rails 5, this will also add an index to the foreign key field
      # If you don't want an index pass the option 'index: false'
      t.timestamps
    end
  end
end
