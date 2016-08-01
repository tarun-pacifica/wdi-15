ARGF.each do |line|
  puts line if line =~ /[Ff]red/ # /(Fred|fred)/
end
