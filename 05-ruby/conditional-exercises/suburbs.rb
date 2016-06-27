# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in: "
suburb = gets.chomp.downcase

case suburb
when 'mosman'
  puts "Very fancy"
when 'parramatta'
  puts "Good eating"
when 'redfern'
  puts "Nice gentrification"
else
  puts "That's probably near the harbour right?"
end
