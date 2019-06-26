def by_five?(num)
  num % 5 == 0
end

# puts by_five?(5) => true


def is_string_or_integer(str)
  if [String, Integer, Array].include?(str.class)
    str.class.to_s
  else
    "Something Else"
  end
end

# puts is_string_or_integer({}) => Something Else

# Arity of a function is the number of parameters it can take.

def min_num(*nums)
  nums.reduce{|acc, num|
    puts num
    if (acc < num)
      acc # Returning would cause it to run just once
    else
      num
    end
  }
end

# puts min_num(2,3,4,0,5,6,1) => 0

=begin
  
In Ruby, you cannot pass a method to another method.
Instead we can pass a block and then use the yield keyword
to return the block

=end

def my_method() 
  yield_return = yield + "/"
  puts "Yielded block #{yield_return}"
  puts "After the block"
end


# So if I have another method that returns a string
def block_method(str)
  return str.reverse
end

# puts my_method() {block_method("Yogi")} => igoY/ 
=begin

  Reverses my name and then adds a / to it

=end

# Implement each function
# if the block contains a function, we can call the function on it.
def each(array)
  for val in array
    yield(val)
  end
end

# each([1,2,3,4,5]) {|x| puts x ** 2} => 1 4 9 16 25

# Map must return a newArr containing all the modified elements
def map(array)
  newArr = Array.new
  for val in array
    newArr <<  yield(val)
  end
  return newArr
end

# print map([1,2,3,4,5]) {|x| x ** 2} => [1,4,9,16,25]

# Filter returns an array containing all the elements of satisfying a certain condition
def filter(array)
  newArr = Array.new
  for val in array
    if (yield(val))
      newArr << val
    end
  end
  return newArr
end

print filter([1,2,3,4,5]) {|x| x > 2}


