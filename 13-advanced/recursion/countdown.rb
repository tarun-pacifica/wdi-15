# 10.downto(1).each do |i|
#   puts i
# end
#
# puts "Blastoff"


def countdown(n=10)
  if n == 0         # Base case
    puts "Blastoff"
  else
    puts n
    sleep 1
    countdown n - 1 # Recursion, step to move closer to the base case
  end
end

countdown
