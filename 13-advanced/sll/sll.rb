class SinglyLinkedList

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) if value
  end

  def last
    current_node = @head
    until current_node.next.nil?
      current_node = current_node.next
    end
    current_node
  end

  def prepend(value) # .unshift
    node = Node.new value
    node.next = @head
    @head = node
    self
  end

  def append(value) # .push
    node = Node.new value
    last.next = node
    self
  end

  def insert_after(node, new_node)
    # TODO
  end

  def shift
    # TODO
  end

  def length
    # TODO
  end

  def find(needle)
    # Return the first node with the value of needle
  end

  def reverse
    # Returns a new reversed list
  end

  def reverse!
    # Reverses the existing list
  end

  def each
  end

  def map # Bonus
  end

  def reject # Bonus
  end

  class Node
    attr_accessor :value, :next
    def initialize(value=nil)
      @value = value
    end
  end

end

# require 'pry'
# binding.pry
