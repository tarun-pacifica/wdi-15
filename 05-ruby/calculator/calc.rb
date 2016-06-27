def prompt(message)
  print message
  gets.chomp # Implicit return
end

def menu
  puts "(a) - addition"
  puts "(q) - quit"
  prompt "Enter your choice: "
end

def add
  a = prompt('Enter your first number: ').to_f
  b = prompt('Enter your second number: ').to_f
  puts "#{ a } + #{ b } is #{ a + b }"
end

menu_selection = menu

until menu_selection == 'q'
  case menu_selection
  when 'a'
    add
  when 's'
    subtract
  else
    puts "Invalid selection, idiot"
  end

  menu_selection = menu
end

puts "Thank you for using this crappy calculator."
