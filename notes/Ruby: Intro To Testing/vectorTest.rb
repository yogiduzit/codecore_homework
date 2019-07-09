require './vector.rb'
require 'minitest/autorun'

class VectorTest < MiniTest::Test
  def test_length
    # Consider a new vector of components 3 and 4
    vector = Vector.new(3, 4)

    # If the length method is called on it
    length = vector.length

    # assert that the length equals to 5
    assert_equal(5, length)

    # We can also use a less verbose format.
    assert_equal(13, Vector.new(5, 12).length)
    assert_equal(25, Vector.new(7, 24).length)

  end

  def test_to_s

    vector = Vector.new(0, 0)

    to_s = vector.to_s

    assert_equal("Vector(0, 0)", to_s)
  end
  
end