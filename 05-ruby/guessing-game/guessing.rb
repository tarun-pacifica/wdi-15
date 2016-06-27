# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

debug_mode = false

print "What is the largest number you would like to play with?: "
MAX_VALUE = gets.to_i

secret_number = Random.rand MAX_VALUE
puts "The secret number is #{ secret_number }" if debug_mode == true

print "What is your guess?: "
guess = gets.to_i

until guess == secret_number
  if guess > secret_number
    puts "Guess lower!"
  else
    puts "Guess higher!"
  end

  print "What is your guess?: "
  guess = gets.to_i
end

puts "congratulatory message"
