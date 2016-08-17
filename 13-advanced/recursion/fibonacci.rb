def fib_i(n)
  a = 1
  b = 1
  while n > 2
    a, b = b, a + b # Parallel assignment
    n -= 1
  end
  b
end

puts fib_i 7
