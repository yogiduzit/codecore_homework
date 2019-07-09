class Rectangle
  def initialize(length, width)
    if length >= 0 && width >= 0
      @len = length
      @wid = width
    else
      raise ArgumentError.new("Please enter positive integers only")
    end
  end

  def area
    @len * @wid
  end

  def perimeter
    2 * (@len + @wid)
  end

  def is_square?
    @len == @wid
  end
end