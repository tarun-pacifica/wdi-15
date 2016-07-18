class Bank
  attr_reader :name, :accounts
  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, balance)
    @accounts[name] = balance unless balance.negative?
  end

  def deposit(name, amount)
    @accounts[name] += amount
  end

  def withdraw(name, amount)
    @accounts[name] -= amount if amount <= @accounts[name]
  end

  def balance(name)
    @accounts[name]
  end
end
