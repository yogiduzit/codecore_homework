class JobPost < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :description, presence: true

  def self.search(query)
    where("title ILIKE ? OR description ILIKE ?", "%#{query}%", "%#{query}%") 
  end
end
