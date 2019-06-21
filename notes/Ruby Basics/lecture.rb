# Print my full name

=begin
print 'What is your first name ' 

  after we press enter, gets includes the new line
  chomp method gets rid of the new line.

first_name = gets.chomp 
print 'What is your last name '
last_name = gets.chomp

puts "Hello " + first_name + " " + last_name
=end


# Reverse a string


=begin
puts "What is your name"
name = gets.chomp

puts " Your name reversed is #{name.reverse}"

name.reverse creates a new string
name.reverse! modifies name
=end


# Remove all consecutive duplicate characters from a string.

=begin name = "Yogiduzit"
puts "Yogiduziiiiiiiiiiit".squeeze
=end


#Replace a pattern in a string

=begin
name = "Hi Bob! Hi Yogi"
puts name.gsub("Bob", "Steve")

=end


# Control Flow
=begin

if "I like you" != "I like you"
  puts "STFU"
else
  puts "HAHAHAHAHA"
end

=end


# Exam Scores

=begin

puts "What is your score"
score = gets.chomp.to_i

if score <= 100 && score > 80
  puts "Your grade is \"A\""
elsif score > 60 && score <= 80
  puts "Your grade is \"B\""
elsif score > 40 && score <= 60
  puts "Your grade is \"C\""
elsif score > 20 && score <= 40
  puts "Your grade is \"D\"" 
elsif score >= 0 && score <= 20
  puts "Your grade is \"E\""
else 
  puts "Enter a valid grade"   
end

=end

# While loops

=begin
x = 50
while x >= 1
  x-=1;
  puts "bad motherfucker"
end

=end

# Print hello-world a number of times the user entered.

=begin 
puts "How many times should I repeat ?"
number = gets.to_i

while number >= 0
  puts "Hello World"
  number -= 1
  break if number > 10000;
end

=end

# Print the first 30 odd numbers

=begin
number = 0;
while number < 30
  puts "Odd Number: " + (number * 2 + 1).to_s
  number += 1;
end
=end

# For loop

=begin
for number in 1..200 do
  puts number
end
=end

#fizz Buzzz

for i in 1...100
  if (i % 3 == 0 && i % 5 != 0)
    puts "Fizz"
  elsif (i % 5 == 0 && i % 3 != 0) 
    puts "Buzz"
  elsif (i % 5 == 0 && i % 3 == 0) 
    puts "Fizzbuzz"
  else 
    puts i
  end
end