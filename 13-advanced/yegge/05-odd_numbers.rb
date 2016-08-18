# Write function to print the odd numbers from 1 to 99.

def odd_numbers(upper_limit=99)
  (1..upper_limit).step(2).each { |i| puts i }
end

odd_numbers
