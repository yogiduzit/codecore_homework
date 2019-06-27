require './helper_methods.rb'

class Cat
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

class Bird
  def initialize(name)
    @name = name
  end
end



for i in 1..100
  cat = Cat.new("Mew")
  bird = Bird.new("Crowe")
  cat.catch(bird)
end