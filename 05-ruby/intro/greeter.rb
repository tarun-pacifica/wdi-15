# Initial greeting
puts "What is your first name?"
first = gets.chomp # Read a line of input from the keyboard and remove the trailing \n.
puts "Hello #{ first }." # String interpolation (only works with double quotes).

puts "What is your last name?"
last = gets.chomp
puts "Your surname is #{ last }."

puts "Your full name is #{ first } #{ last }."
