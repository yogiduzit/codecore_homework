# Hashes look like JSON objects but are not necessarily similar.

my_hash = Hash.new
your_hash = {}

=begin

  Hashes have a default value that is returned when accessing keys that do
  not exist in the hash.  If no default is set, nil is returned. you can set the 
  default value with an argument to the new method.

=end

their_hash = Hash.new(0);

# Create a new hash with three movies 

movie_with_director = {
  "Pulp Fiction" => "Quentin Tarantino",
  "Jurrasic Park" => "Stephen Spielberg",
  "Aladdin" => "Guy Ritchie"
}
movie_with_director["Key not in the hash"] # => nil
movie_with_director["Pulp Fiction"] # => "Quentin Tarantino" 

# Find a method that returns an array of the hash's keys
movie_with_director.keys

# Find a method that returns an array of the hash's values
movie_with_director.values

# Iterating over hashes
movie_with_director.each do |key, value|
  puts "Key: #{key} Value: #{value}"
end

# Print all the elements of arrays in hash values
hash = {'BC' => ['Vancouver', 'Richmond'], 'AB' => ['Calgary', 'Edmonton']};

hash.each do |province, value|
  puts "#{province}: #{value.join(', ')}"
end

city_hash = {
  vancouver => 2135201
}