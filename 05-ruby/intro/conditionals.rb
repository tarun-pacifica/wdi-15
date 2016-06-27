if 13 > 10
  puts "Thirteen is bigger"
end

puts "Thirteen is bigger" if 13 > 10

puts "Thirteen is bigger" unless 13 < 10

today = "Monday"
if today == "Monday"
  puts "Media Watch is on tonight"
elsif today == "Thursday"
  puts "Rake is on tonight"
else
  puts "Maybe the Simpsons is on tonight"
end

grade = 'B'
case grade
when 'A'
  puts "Great job"
when 'B'
  puts "Good job"
when 'C'
  puts "Adequate job"
else
  puts "You're fired"
end
