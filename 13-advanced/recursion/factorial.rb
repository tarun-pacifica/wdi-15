# Iterative factorial
def fact_i(n)
  # (1..n).to_a.inject :*

  product = 1
  while n > 1
    product *= n
    n -= 1
  end
  product
end

puts fact_i(5)

# Recursive factorial
def fact_r(n)
  # n <= 1 ? 1 : n * fact_r(n - 1)

  if n <= 1
    1
  else
    n * fact_r(n - 1) # e.g. 5! = 5 * 4!
  end
end

puts fact_r(5)

require 'pry'
binding.pry
