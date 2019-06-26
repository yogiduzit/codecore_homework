
# For an array of strings, build another array containing 
# the lengths of strings in order.
words = ["Yogi", "Kaylyn", "Sussannah"]
lengths = words.map { |word| word.length }

# Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent
string = "abcd"
combs = string.split("").combination(2).map { |comb|
  comb.join('')
}
=begin

Write some code that keeps asking the user for book names until the user enters "exit".
 After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.



books = Array.new
response = ""
while response != "exit"
  puts "Enter a book name"
  response = gets.chomp
  books << response.upcase if response != "exit"
end
books.sort!
print books

=begin

Given an array of arrays:
  Write a piece of code that will take that array and give back 
  an array of arrays with each element multiplied by itself so you will get back:

=end

arrays = [[1,2,3], [3,4,5], [6,7,8]];
squareArr = arrays.map {|array| 
  array.map { |num|
    num ** 2
  }
}

# Reverse engineer the string reverse method
input = "hsegoY"
output = input.split("").reverse().join("")

=begin 

Ask the user for personal information: first name, last name, city of birth and age.
Then store that information in a hash. After that loop through the hash and display the results

=end

personInfo = Hash.new

puts "What is your first name ?"
personInfo["first name"] = gets.chomp.upcase

puts "What is your last name ?"
personInfo["last name"] = gets.chomp.upcase

puts "What is your city of birth ?"
personInfo["birth city"] = gets.chomp.upcase

puts "What is your age ?"
personInfo["age"] = gets.chomp

personInfo.each{ |key, value|
  puts "Your #{key} is #{value}"
}