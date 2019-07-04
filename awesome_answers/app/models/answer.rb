class Answer < ApplicationRecord
  # Use the .question method on an answer to get the question related
  # to it.
  belongs_to :question # Accessor method

  validates :body, presence: true
  

end
