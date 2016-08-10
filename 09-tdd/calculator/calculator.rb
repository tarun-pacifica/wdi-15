class Calculator
  def initialize
    @input = []
  end

  def <<(n)
    @input << n.to_f
  end

  def add
    @input.inject :+
  end
end
