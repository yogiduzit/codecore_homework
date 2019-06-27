class FizzBuzz
  attr_accessor(:first, :second)
  
  def initialize(a, b)
    @first = a
    @second = b
  end

  def run
    fizzBuzzArr = Array.new

    for i in 1..100
      toPush = ""
      if i % @first == 0
        toPush += "fizz"
      end
      if i % @second == 0
        toPush += "buzz"
      end
      if i % @first != 0 && i % @second != 0
        toPush = i
      end
      fizzBuzzArr << toPush
    end

    return fizzBuzzArr
  end

end