# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

print "What is the current temperate: "
current_temp = gets.to_i

print "Is the airconditioner functional (y/n): "
functional_ac = gets.chomp.downcase

print "What is the desired temperature: "
desired_temp = gets.to_i

if functional_ac == 'y'
  puts "Turn on the A/C Please" if current_temp > desired_temp
else # AC is NOT functional
  if current_temp > desired_temp
    puts "Fix the A/C now! It's hot!"
  else
    puts "Fix the A/C whene ver you have the chance... It's cool..."
  end
end
