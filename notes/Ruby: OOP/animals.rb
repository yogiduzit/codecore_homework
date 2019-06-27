class Animal
  attr_accessor(:name, :color)

  def initalize(name, color)
    @name = name
    @color = color
  end

  def eat
    puts "I'm eating"
  end
  
  def walk
    puts "I'm walking"
  end
end

class Dog < Animal

  def bark
    return woof
  end

  def eat
    super
    puts "Bones are yummy"
  end

end

class Cat < Animal

  def eat
    puts "Fish is yummy"
  end
end