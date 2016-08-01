ARGF.each do |line|
  # puts line if line =~ /(fred.*wilma|wilma.*fred)/
  puts line if line =~ /fred/ && line =~ /wilma/
end
