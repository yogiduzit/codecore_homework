class Answer < ApplicationRecord
  # Use the .question method on an answer to get the question related
  # to it.
  belongs_to :question # Accessor method
  belongs_to :user

  validates :body, presence: true
  

end
