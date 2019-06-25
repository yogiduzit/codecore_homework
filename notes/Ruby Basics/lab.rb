# Write a code that prints letters in increasing number:
=begin
count = 1;

for i in 'a'..'z'
  j = 1
  while j <= count
    print i
    j += 1
  end
  puts ""
  count += 1
end

=end

# Build a command line quiz where it prompts the user with a three questions and then print the percentage.
=begin
count = 0;
puts "Who killed Qui-Gon in Star Wars: A Phantom Menace?"
puts "1- Darth Sidious"
puts "2- Darth Maul"
puts "3- Darth Vader"
first = gets.chomp
if first == "Darth Maul"
  count += 1
end

puts "Who converted to the dark side in Star Wars: The Clone Wars"
puts "1- Qui Gon"
puts "2- Princess Leia"
puts "3- Count Dooku"
second = gets.chomp

if second == "Count Dooku"
  count += 1
end

puts "Are you feeling tired?"
puts "1- yes"
puts "2- no"
puts "3- hhaaawwhh"
third = gets.chomp

if third == "hhaaawwhh"
  count += 1
end

puts "You scored " + (count.to_f.round / 3 * 100).to_s + ", you got " + count.to_s + " out of 3 questions correctly"
=end

# Write a method that takes a number N and then draw a triangle that has N number of letter O on each of its sides

=begin
puts "How many letters ?"
num = gets


for i in 1..num.to_i
  for j in num.to_i.downto(i)
    print " "
  end
  for j in 1..i
    print "0 ";
  end
  puts ""
end

=end

#Ask the user for for three inputs and then print out all the possible permutations for the user inputs.

=begin
alphs = []
puts "first alphabet"
alphs.push(gets.chomp)

puts "second alphabet"
alphs.push(gets.chomp)

puts "third alphabet"
alphs.push(gets.chomp)
=end


# print alphs.repeated_permutation(3).to_a  -- Arrays permutation method


# Ask the user for a number x and then print the first x prime numbers.


puts "Enter a number"
NUM_OF_PRIMES = gets.chomp.to_i

i = 0
num = 2
while true
  count = 0
  for a in 2..(num / 2)
    if num % a == 0
      count += 1
    end
  end
  if count == 0
    i += 1
    puts num
  end
  num += 1
  break if i >= NUM_OF_PRIMES
end



# Use until loop to print 5 to 15
=begin
i = 5
until i > 15
  puts i
  i += 1
end
=end

# Find out how to get PI in Ruby and then write a formula using that to convert degrees to radian.
=begin
puts "Enter degrees"
degs = gets

puts "Radians: " + (degs.to_i * (Math::PI / 180)).round(2).to_s
=end
