def fib_i(n)
  a = 1
  b = 1
  while n > 2
    a, b = b, a + b # Parallel assignment
    n -= 1
  end
  b
end

def fib_r_slow(n)
  # Memoization would make this more efficient
  if n <= 2
    1
  else
    fib_r_slow(n - 1) + fib_r_slow(n - 2)
  end
end

def fib_r_fast(n, a=1, b=1)
  if n > 2
    fib_r_fast(n - 1, b, a + b)
  else
    b
  end

end

100_000.times do |i|
  puts "fibonacci no #{ i } "
  puts "iterative: #{ fib_i i }"
  puts "recursive #{ fib_r_fast i }"
  puts "*" * 80
end
