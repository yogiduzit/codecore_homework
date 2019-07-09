require 'minitest/autorun'

# Creating a grouping of tests using a test class

class HelloWorldTest < Minitest::Test

  # The method name must contain test_ to make sure that
  # it runs properly.
  def test_something

    # Use assert to verify that the code returns true.
    assert(true)
  end

  def test_something_else
    # Use the method assert_equal inside a test method to compare 
    # values.

    assert_equal(2, 1+1)
  end
end