# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one?
nums = Array.new

for i in 1..1000000
  nums << i
end

nums.pop()
nums.push(1)

# Using for loop
=begin
repeat = 0;
nums.sort!()
for i in 1..nums.length-1
  if (nums[i] == nums[i - 1])
    repeat = nums[i];
  end
end

print repeat
=end

# Using hash

repeat = 0;
countNums = Hash.new
for i in nums
  if countNums.has_key?(i.to_s) 
    repeat = i;
   else
    countNums[i.to_s] = 1;
   end
end
print repeat

# Given an array of questions, select only those whose length > 15
# Using array.select

questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]
questions.select!{|question|
  question.length > 15
}
print questions
 

