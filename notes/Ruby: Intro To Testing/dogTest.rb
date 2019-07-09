require 'minitest/autorun'
require './dog.rb'

class DogTest < MiniTest::Test
  def test_give_bone
    shibe = Dog.new
    
    # Detects if an argument error has been raised.
    assert_raises do
      shibe.give_bone("Small")
      shibe.give_bone("MEGACHONK")
      shibe.give_bone("LARGE")
      shibe.give_bone("Big")
    end
  end

  def test_eat_bone
    husky = Dog.new
    husky.give_bone("Large")

    assert_equal("Large", husky.eat_bone)
    assert_equal(0, husky.bones.length)
  end

  def test_bone_count

    corgi = Dog.new
    corgi.give_bone("BIG")
    corgi.give_bone("HUGE")

    assert_equal(2, corgi.bone_count)
  end
end