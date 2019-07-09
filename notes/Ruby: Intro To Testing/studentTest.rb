require './student.rb'
require 'minitest/autorun'

class StudentTest < MiniTest::Test
  def test_for_nil_fields
    assert_raises do
      Student.new("Yogi")
    end
  end

  def test_full_name
    me = Student.new("Yogesh", "Verma", 23)

    assert_equal("Yogesh Verma", me.full_name)
  end

  def test_grade
    me = Student.new("Yogesh", "Verma", 32)
    you = Student.new("Unknown", "McUnknown", 11)

    assert_equal("F", you.grade)
    assert_equal("E", me.grade)

  end
end