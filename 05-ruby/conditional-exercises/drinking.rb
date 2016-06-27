# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.

print "What is your age?: "
age = gets.to_i # We don't need chomp because an integer can't contain a \n

puts "You are #{ age }"

if age < 18
  puts "An appropriate message"
else
  puts "A different message"
end
