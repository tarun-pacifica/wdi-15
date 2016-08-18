# Write a function that sums up integers from a text file, one int per line.
# ruby 04-sum_integers.rb numbers.txt

# sum = 0
# ARGF.each do |line|
#   sum += line.to_i
# end
#
# puts sum

# puts ARGF.reduce(0) { |sum, i| sum += i.to_i }
# puts ARGF.to_a.map(&:to_i).reduce(:+) # Inefficient because we iterate twice

def sum_file(filename)
 File.open(filename).reduce(0) { |sum, i| sum += i.to_i }
end

puts sum_file('numbers.txt')
