# FizzBuzz again
fizzBuzzArr = Array.new
for i in 1..100
  toPush = ""
  if (i % 3 == 0)
    toPush += "fizz"
  end
  if (i % 5 == 0)
    toPush += "buzz"
  end
  if (i % 3 != 0 && i % 5 != 0)
    toPush += i.to_s
  end
  fizzBuzzArr << toPush
end

print fizzBuzzArr

# Build an array containing five elements and print each of the values squared
nums = [1, 4, 50, 678, 45321]
nums.each do |element|
   puts element ** 2
end

# Print every number squared in the following array
numArrs = [[1,3,5], [2,4,6], [7,8,9]]

numArrs.each do |numArr|
  numArr.each do |num|
    puts num ** 2
  end
end 

=begin 
Write a piece of code that takes in a string and 
then converts every even word into lowercase and odd 
word into uppercase.
=end

puts "Enter a sentence"
sentence = gets.chomp


result = ""
sentence.split("").each.with_index do |val, index|
  if index.even?
    result += val.downcase
  else
    result += val.upcase
  end
end
puts result

=begin
Generate a random sentence from the words in this array
=end

a = [["John", "Yogi", "Lin"], ["is eating", "is playing", "is sleeping"], ["with a fork", "with a ball", "with a pillow"]]
puts a.map{|words| words.sample}.join(" ");

=begin
  Working: Maps through the three arrays
  .sample selects a random element and 
  then creates an array with the three elements.
end