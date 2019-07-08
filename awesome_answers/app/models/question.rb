class Question < ApplicationRecord

  # Adds a one to many relation from question to answers
  # If one question is deleted, all the answers related to it 
  # get deleted as well. If we use dependent: nullify
  # it will change the id's of the answers related to the deleted
  # question to NULL.
  has_many(:answers, dependent: :destroy)
  belongs_to :user
  
  # To check if a question is present and has a unique title.
  validates(:title, presence:true, uniqueness: true);

  # To check if body is present
  validates(:body, presence: {message: "must exist"});

  # Custom validation
  # Use singular method names for custom validations.
  validate :no_monkey


  before_validation(:set_default_like_count)

  # Creating a scope with a class method
  # def self.recent
  #   order(created_at: desc).limit(10)
  # end

  # Scopes can also be created by just passing a name and lambda
  # function to them.
  scope(:recent, -> {
    order(created_at: sedesc).limit(10)
  })

  scope(:search, -> (query) {
    where("title ILIKE ? OR body ILIKE ?", "%#{query}%", "%#{query}%")
  });

  private
  def no_monkey

    # & ensures that if the called method does not
    # exist for the particular object. It just returns 'nil'
    # instead of an error.
    if body&.downcase&.include?("monkey")

      # adding an error makes a record invalid
      self.errors.add(:body, "Must not have monkeys")
    end

  end

  def set_default_like_count
    self.like_count ||= 0
  end

  
end
