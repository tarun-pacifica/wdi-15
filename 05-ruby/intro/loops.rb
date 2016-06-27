# Infinite loop
# while true
#   puts "OMG"
# end

i = 0
while i < 5
  puts "i: #{ i }"
  i += 1 # i++ not available in Ruby
end

i = 0
until i == 5
  puts "i: #{ i }"
  i += 1
end
