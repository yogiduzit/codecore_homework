class Question < ApplicationRecord
  # To check if a question has a unique title.
  validates(:title, presence:true, uniqueness: true);
  validates(:body, presence: {message: "must exist"});

  # Custom validation
  # Use singular method names for custom validations.
  validate :no_monkey
  before_validation(:set_default_view_count)

  # Creating a scope with a class method
  def self.recent
    order(created_at: desc).limit(10)
  end

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

  def set_default_view_count
    self.view_count ||= 0
  end

end
