# Iterator
5.times do
  puts "OMG"
end

5.times do |i|
  puts "i: #{ i }"
end

5.downto(0) do |i|
  puts "i: #{ i }"
end

(0..5).each do |i| # Ranges!
  puts i
end
