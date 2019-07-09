require 'minitest/autorun'
require './circle.rb'
MAX_ERROR = 0.000001
class CircleTest < MiniTest::Test
  def test_diameter
    # given
    a = Circle.new(2)
    # then, when
    assert_equal(4, a.diameter)
  end

  def test_area
    a = Circle.new(3)
    b = Circle.new(3 / Math.sqrt(Math::PI))

    assert_equal(9 * Math::PI, a.area)
    assert((9 - b.area).abs < MAX_ERROR)

  end
  
  def test_perimeter
    a = Circle.new(2)
    b = Circle.new(1 / Math::PI)

    assert_equal(4 * Math::PI, a.perimeter)
    assert_equal(2, b.perimeter)
  end
end