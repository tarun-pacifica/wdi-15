require_relative '../bank'

describe Bank do

  let(:bank) { Bank.new 'TDD Bank' }

  describe '.new' do
    it 'creates a new bank object' do
      expect(bank).to_not eq nil
    end

    it 'has a name' do
      expect(bank.name).to eq 'TDD Bank'
    end

    it 'has no accounts' do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe '#create_account' do
    it 'creates a new account for a user with a given starting balance' do
      bank.create_account 'Bob', 200
      expect(bank.accounts['Bob']).to eq 200
    end

    it 'ignores starting deposits of negative amounts' do
      bank.create_account('Bob', -1)
      expect(bank.balance('Bob')).to be nil
    end
  end

  describe '#deposit' do
    it 'deposits some amount into a specific account' do
      bank.create_account 'Bob', 200
      bank.deposit 'Bob', 300
      expect(bank.accounts['Bob']).to eq 200 + 300
    end
  end

  describe '#balance' do
    it "returns the balance for a given account" do
      amount = Random.rand(1..10_000)
      bank.create_account 'Bob', amount
      expect(bank.balance('Bob')).to eq amount
    end
  end

  describe '#withdraw' do
    it 'withdraws some amount from a specified account' do
      bank.create_account('Bob', 200)
      bank.withdraw('Bob', 50)
      expect(bank.balance('Bob')).to eq 200 - 50
    end

    it 'ignores requests for withdrawals that exceed the account balance' do
      bank.create_account('Bob', 200)
      bank.withdraw('Bob', 1_000_000)
      expect(bank.balance('Bob')).to eq 200
    end
  end
end
