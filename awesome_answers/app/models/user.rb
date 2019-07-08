class User < ApplicationRecord

  has_many(:answers, dependent: :nullify)
  has_many(:questions, dependent: :nullify)

  has_secure_password

  
end
