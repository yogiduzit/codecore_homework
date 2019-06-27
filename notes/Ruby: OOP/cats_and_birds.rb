require './helper_methods.rb'
require './animals.rb'

class Cat < Animal
   include HelperMethods
  
  def initialize(name)
    @name = name
  end

  def catch(bird)
    puts "Come here bird! Let me see how your guts taste like 😽 😽 😽 😽 😽"
    if (random_number(1..2) == 1)
      puts "Gotcha Birdy"
    else
      puts "😿 😿 😿 😿 😿 😿"
    end
  end

  
end

class Bird < Animal
  def initialize(name)
    @name = name
  end
end





cat = Cat.new("Catto")
Cat.helper_methods(1..2)
