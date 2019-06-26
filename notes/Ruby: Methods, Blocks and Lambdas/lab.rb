# Create a method, get_user_info, that when called asks the user for the following personal 
# information: first name, last name, city of birth and age. Then, return that information as a hash.

def get_user_info
  personal_info = Hash.new

  puts "Enter first name"
  personal_info["first name"] = gets.chomp

  puts "Enter last name"
  personal_info["last name"] = gets.chomp

  puts "Enter city of birth"
  personal_info["birth city"] = gets.chomp

  puts "Enter age"
  personal_info["age"] = gets.chomp

  return personal_info
end

# Create a method, most_common_letter, that takes a string as an argument and returns the most common 
# letter in the string. Ignore special characters and include numbers.

def most_common_letter(str)
  letters = Hash.new

  for i in 0..str.length-1
    if letters.has_key?(str[i])
      letters[str[i]] += 1
    else 
      letters[str[i]] = 1
    end
  end

  max = letters[str[i]]
  maxKey = str[i]
  letters.each{|key, value|
    if (value > max)
      max = value
      maxKey = key
    end
  }
  return maxKey
end

# most_common_letter("yyyoguds") => "y"

# Implement a `pluck` method, which takes an array of hashes and a key name, and returns 
# an array containing the values for each named key in the hash.

def pluck(hashes, key)
  valueArr = Array.new
  for hash in hashes
    if hash.has_key?(key)
      valueArr << hash[key]
    else
      valueArr << nil
    end
  end
  return valueArr
end

# pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a)  => [nil, 4, 1, nil]

# Implement a reduce method which takes an array, and initial value and a block as its arguments
def reduce(array, initial)
  value = initial;
  for i in array
    value = yield(value, i)
  end
  return value
end

# reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } => 21

# Implement a map_over_hash method that can be use to map over a hash returning an array.
# The block passed to the method must be passed the key and value of the mapped over pairs.

def map_over_hash(hash)
  valueArr = Array.new
  for key, value in hash
    valueArr.push(yield(key, value))
  end
  return valueArr
end

=begin

map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
  "Her #{key.to_s} is #{value}"
end => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]

=end