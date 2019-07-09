require 'minitest/autorun'
require './rectangle.rb'

class RectangleTest < Minitest::Test

  def test_area
    assert_equal(20, Rectangle.new(4, 5).area)
    assert_equal(20, Rectangle.new(-4, -5).area)
  end

  def test_perimeter
    assert_equal(14, Rectangle.new(2, 5).perimeter)
  end

  def test_is_square?
    assert(Rectangle.new(4, 4).is_square?)
  end

  def test_initialize_raises_error_when_args_negative
    assert_raises do
      Rectangle.new(-1, 2)
    end
  end
end