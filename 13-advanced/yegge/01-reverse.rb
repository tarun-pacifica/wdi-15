# Write a function to reverse a string.

# "hotdogs".reverse (preferred)
# "hotdogs".chars.reverse.join

def reverse_i (str)
  reversed = []
  str.chars.each do |c|
    reversed.unshift c
  end
  reversed.join
end

def reverse_r(str)
  if str.empty? # Base case
    str
  else
    reverse_r( str[1..-1] ) + str[0] # Approaching the base case
  end
end


require 'pry'
binding.pry
