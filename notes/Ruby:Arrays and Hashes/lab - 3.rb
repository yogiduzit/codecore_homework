# Given a number N from the user. Generate an array that contains the first N numbers of the fibonacci sequence.
=begin
puts "How many number do you want"
num = gets.chomp.to_i
fibs = [1, 1];
for i in 2..num-1
  fibs.push(fibs[i - 1] + fibs[i - 2])
end

print fibs
=end

=begin
Write a code that takes an array and then returns another array that contains all the numbers that are greater than 10.
The code should not fail if the array contains strings / non-number elements
=end

my_array = [1,4,5,23,14,"Hello there", false, nil]

puts my_array.map{|element|
  if element.instance_of? Integer
    if element > 10
      element
    end
  end
}

=begin
Keep asking user for input and add their input to an array until they type "exit".
After that print out the number of input they've entered and the words.
=end
responseArr = Array.new
response = ""
while (response != "quit")
  responseArr << response if response != "quit"
end
