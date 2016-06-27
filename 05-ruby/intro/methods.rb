def greeting
  puts "Hello world"
end

greeting

def hello(name='World') # Default parameter: enables variadic methods
  puts "Hello #{ name }"
end

hello 'Badger'
hello

def add(a, b)
  a + b # Implicit return
end

result = add(7, 9)
puts result
