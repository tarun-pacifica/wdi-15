require 'pry'

class Person
  attr_accessor :name, :blood_type
end

class MarxBrother < Person # Inheritance
  attr_accessor :instrument, :vice # Writes our getters and setters for us

  def initialize(instrument='voice', vice='spending money') # Default parameters
    @instrument = instrument
    @vice = vice
  end

  def bio
    "I play the #{ @instrument } and I enjoy #{ @vice }"
  end
end

groucho = MarxBrother.new 'guitar', 'cigars'

harpo = MarxBrother.new
# harpo.instrument = 'harp'
# harpo.vice = 'mutism'

binding.pry
