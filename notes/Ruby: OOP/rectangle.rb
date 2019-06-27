class Rectangle
  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    return @width * @height
  end

  $yogi = "Yogi";
  # Just simply use .width or .height with the instance to get the value
  attr_accessor(:width, :height) # Combines both getter and setter

  def is_square?
    return width == height
  end

end

# puts $yogi => Global variable declared inside the class but accesible outside
# VERY DANGEROUS