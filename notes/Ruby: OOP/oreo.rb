require './cookie.rb'
class Oreo < Cookie
  def initialize(sugar, flour, filling_type="Pure White Sugar")
    super(sugar, floor)
    @filling_type = filling_type
  end

  def eat
    # super => Means use the eat method of the parent
    # If something is placed in here, it will replace the eat method 
  end
end