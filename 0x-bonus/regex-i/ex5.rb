ARGF.each do |line|
  puts line if line =~ /(.)\1/ # Capturing and back reference
end
